import React, { Component } from 'react';
import Avatar from '../assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

export default class Comment extends Component {
    render() {
        return (
            <div className="comment-container">
                <div className="reaction" >
                    <span>
                        <a><span><FontAwesomeIcon icon={faHeart} /></span></a>
                    </span>
                    <span>
                        <a><span><FontAwesomeIcon icon={faComment} /></span></a>
                    </span>
                </div>
                <div>
                    <div className="profile">
                        <div className="img-container">
                            <img alt="profile" src={Avatar} width="35px" height="35px"/>
                        </div>
                        <div className="comment-item">
                            <span className="name">
                                Youssef nida
                            </span>
                            <div className="comment-content" >
                                Follow me and you'll eat your phone 🍽
                                <br/>
                                Eat with your eyes 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}