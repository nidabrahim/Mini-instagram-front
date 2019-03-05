import React, { Component } from 'react';
import UserProvider from "./../providers/userProvider"
import MiniProfile from "./miniProfile";
import PostList from "./postList";

export default class User extends Component {
  render() {
    return (
        <UserProvider>
            <div className="main-container">
                <div className="posts">
                    <MiniProfile/>
                    <PostList/>
                </div>
            </div>
        </UserProvider>
    );
  }
}

