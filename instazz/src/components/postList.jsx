import React, { Component } from 'react';
import Post from "./post";
import API from '../api';


export default class PostList extends Component {

  state = {
    posts : []
  }

  componentDidMount(){
        API.get("posts")
      .then(res => {
          const posts = res.data.posts;
          this.setState({ posts });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  handleSubmit = event => {
    event.preventDefault();

    API.delete(`posts/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
        <div className="post-list">
            { this.state.posts.map(post => <Post width="46%" post={post} />)}
        </div>
    );
  }
}

