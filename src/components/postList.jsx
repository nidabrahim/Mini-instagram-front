import React, { Component } from 'react';
import Post from "./post";
import { UserConsumer } from './../providers/userProvider'
import PostProvider from '../providers/postProvider';


export default class PostList extends Component {

  render() {
    return (
      <UserConsumer>
        {({ posts }) => (
          <div className="post-list">
              { posts.map(post => <PostProvider post={post} ><Post width="46%" /></PostProvider>)}
          </div>
        )}
      </UserConsumer>
    );
  }
}

