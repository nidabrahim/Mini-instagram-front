import React, { Component } from 'react';
import Avatar from '../assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { PostConsumer } from '../providers/postProvider';
import ConnectedCommentForm from './commentForm';


export default class Comment extends Component {

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
                                </span>
                                <div className="comment-content" >
                                    {comment.body}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <ConnectedCommentForm />
            </div>
            )}
            </PostConsumer>

        );
    }
}