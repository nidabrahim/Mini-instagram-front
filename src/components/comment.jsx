import React, { Component } from 'react';
import Avatar from '../assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import API from '../api';
import CommentForm from './commentForm';
import { PostConsumer } from '../providers/postProvider';
import ConnectedCommentForm from './commentForm';


export default class Comment extends Component {

    // constructor(props) {
    //     super(props);
    // }

    // state = {
    //     post: this.props.post
    // }


    // state = {
    //     body: '',
    //     author: this.props.author
    // }

    // getValidationState(){
    
    // }
    
    // handleChange = event => {
    //     this.setState({ body: event.target.value });
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     const access_token = localStorage.getItem("token");
    
    //     const config = {
    //       headers: {
    //         Authorization: access_token,
    //         'Content-Type': 'application/json'
    //       }
    //     }
    
    //     const comment = {
    //         body: this.state.body,
    //         author: this.state.author
    //     };
    
    //     API.post('post/'+this.props.post._id+'/comments/add', comment, config)
    //       .then(res => {
    //         console.log(res.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    // }

    render() {
        return (
            <PostConsumer>
            {({ post, updateLike }) => (
            <div className="comment-container">
                <div className="reaction" >
                    <span>
                        <a onClick={() => updateLike(post)} ><span><FontAwesomeIcon icon={faHeart} /> {post.likes} </span></a>
                    </span>
                    <span>
                        <a><span><FontAwesomeIcon icon={faComment} /> {post.comments.length} </span></a>
                    </span>
                </div>
                { post.comments.map(comment => 
                    <div>
                        <div className="profile">
                            <div className="img-container">
                                <img alt="profile" src={Avatar} width="35px" height="35px"/>
                            </div>
                            <div className="comment-item">
                                <span className="name">
                                    {comment.author && comment.author.name}
                                    {!comment.author && 'Anonyme'}
                                    {/* {comment.author.name} */}
                                </span>
                                <div className="comment-content" >
                                    {comment.body}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* <ConnectedCommentForm post={this.props.post} /> */}
                <ConnectedCommentForm />
            </div>
            )}
            </PostConsumer>

        );
    }
}