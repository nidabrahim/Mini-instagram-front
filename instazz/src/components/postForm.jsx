import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import API from '../api';
import MyUploader from './myUploader'
import { UserConsumer } from './../providers/userProvider'

class PostForm extends React.Component {

  state = {
    title: '',
    description: '',
    author: this.props.author
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

    const post = {
        title: this.state.title,
        description: this.state.description,
        hidden: false,
        author: this.state.author
    };

    API.post('post/add', post, config)
      .then(res => {
        this.props.onHide();
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    console.log("hi ");
    console.log(this.state.author);
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

          <MyUploader/>

          <Button className="insta-btn" type="submit">Submit</Button>

        </form>

      </div>
    )
  }

}

const ConnectedPostForm = props => (
  <UserConsumer>
    {({ user }) => (
      <PostForm
        {...props}
        author={user}
      />
    )}
  </UserConsumer>
)
export default ConnectedPostForm