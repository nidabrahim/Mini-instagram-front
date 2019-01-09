import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import Post from "./post";
import MiniProfile from "./miniProfile";
import PostList from "./postList";

export default class User extends Component {
  render() {
    return (
        <div className="main-container">
            <div className="posts">
                <MiniProfile/>
                <PostList/>
            </div>
        </div>
    );
  }
}

