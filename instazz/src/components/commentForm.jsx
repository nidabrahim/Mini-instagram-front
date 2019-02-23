import React, { Component } from 'react';
import Avatar from '../assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormGroup, FormControl } from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import API from '../api';
import { UserConsumer, UserContext } from './../providers/userProvider'
import { PostConsumer, PostContext } from '../providers/postProvider';

class CommentForm extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        comment: {
            body: '',
            author: this.props.author
        }
    }

    componentDidMount() {
       console.log(this.state.comment);
      }

    getValidationState(){}
    
    handleChange = event => {
        this.setState({comment : { body: event.target.value, author: this.props.author }});
    }

     handleSubmit = event => {
         event.preventDefault();
         this.context.addComment(this.state.comment);
     }

    render() {
        return (
                <div>
                    <div className="profile">
                        <div className="comment-item">
                            <span className="name">
                                {this.props.author.name}
                            </span>
                            <div className="comment-content" >
                                <form onSubmit={this.handleSubmit}>
                                    <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
                                        <FormControl
                                        type="text"
                                        value={this.state.value}
                                        placeholder="Enter title"
                                        name="title"
                                        onChange={this.handleChange} />
                                        <FormControl.Feedback />
                                    </FormGroup>
                                    <button className="insta-btn" type="submit"><FontAwesomeIcon icon={faPlus} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
CommentForm.contextType = PostContext;


const ConnectedCommentForm = props => (
    <UserConsumer>
      {({ user }) => (
        <CommentForm
          {...props}
          author={user}
        />
      )}
    </UserConsumer>
)
  
export default ConnectedCommentForm

// export default CommentForm