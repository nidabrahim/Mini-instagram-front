import React, { Component } from 'react';
import Post from "./post";
import API from '../api';


export default class PostList extends Component {

  state = {
    posts : []
  }

  componentDidMount(){
    const access_token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user");
    const config = {
      headers: {
        Authorization: access_token,
        'Content-Type': 'application/json'
      }
    }
    //Posts by user
    API.get("posts",config)
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

