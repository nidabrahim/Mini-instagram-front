import React, { Component } from 'react';
import API from './../api';

const PostsContext = React.createContext()

export const PostsConsumer = PostsContext.Consumer

class PostsProvider extends Component {

  state = {
    posts: [],
    updateItem: this.updateItem
  }

  updateItem = (updatedItem) => {
    console.log(updatedItem);
  };

  componentDidMount(){
    const access_token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: access_token,
        'Content-Type': 'application/json'
      }
    }

    API.get("posts/public", config)
    .then(res => {
        const posts = res.data.posts;
        this.setState({ posts });
    })
    .catch(function (error) {
        console.log(error);
    })
}

  render () {
    return (
      <PostsContext.Provider value={this.state}>
        {this.props.children}
      </PostsContext.Provider>
    )
  }
}
export default PostsProvider