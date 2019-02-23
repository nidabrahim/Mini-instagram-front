import React, { Component } from 'react';
import { PostsConsumer } from './../providers/postsProvider'
import Comment from './comment';


const CommentExplore = props => (
    <PostsConsumer>
      {({ updateItem }) => (
        <Comment
          {...props}
          updateItem={updateItem}
        />
      )}
    </PostsConsumer>
)
  
export default CommentExplore