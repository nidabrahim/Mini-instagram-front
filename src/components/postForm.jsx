import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import API from '../api';
import { UserConsumer } from './../providers/userProvider'
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

class PostForm extends React.Component {

  state = {
    title: '',
    description: '',
    author: this.props.author,

    file: '',
    imagePreviewUrl: ''
  }

  getValidationState(){
    
  }

  handleChange = event => {
   
    const target = event.target;

    if(target.type === 'text'){
      this.setState({ title: event.target.value });
    }
    else if(target.type === 'textarea'){
      this.setState({ description: event.target.value });
    }

    if(target.files){
      let reader = new FileReader();
      let file = target.files[0];
      reader.readAsDataURL(file)

      reader.onload = (event) => {
          console.log(event.target.result);
          this.setState({
              file: file,
              imagePreviewUrl: reader.result
          });
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const access_token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: access_token,
        'Content-Type': 'application/json'
      }
    }

    const fd = new FormData();
    fd.append('photo', this.state.file, this.state.file.name);

    API.post('post/photo', fd, config)
    .then(res => {

        const post = {
          title: this.state.title,
          description: this.state.description,
          hidden: false,
          author: this.state.author,
          img: res.data.filename
        };

        console.log(post);

        API.post('post/add', post, config)
        .then(result => {
          this.props.onHide();
          console.log(result.data);
          const post = result.data.post;
          this.props.posts.push(post);
        })
        .catch((error) => {
          console.log(error);
        })
    })
    .catch((error) => {
        console.log(error);
    })

  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }

    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter title"
              name="title"
              onChange={this.handleChange} />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl 
              componentClass="textarea" 
              value={this.state.value} 
              placeholder="Enter description" 
              name="description" 
              onChange={this.handleChange} />
            </FormGroup>

          <div className="previewComponent">

            <div>
              <input className="fileInput" 
                type="file" name="file"
                onChange={this.handleChange} />
            </div>

            <div className="imgPreview">
              {$imagePreview}
            </div>

          </div>

          <button className="submitButton btn btn-outline btn-xl js-scroll-trigger" type="submit">Add post</button>

        </form>

      </div>
    )
  }

}

const ConnectedPostForm = props => (
  <UserConsumer>
    {({ user, posts }) => (
      <PostForm
        {...props}
        author={user}
        posts={posts}
      />
    )}
  </UserConsumer>
)
export default ConnectedPostForm