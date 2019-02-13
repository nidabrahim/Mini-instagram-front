import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import Post from "./post";
import API from '../api';


export default class Explore extends Component {

    state = {
        posts : []
      }

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

    render() {
        return (
            <div className="main-container">
                <div className="all-posts">
                <div>
                    <div>
                        { this.state.posts.map(post =>  <Post width="30%" post={post} /> )}
                    </div>
                    {/* <div>
                        <Post width="30%"/>
                        <Post width="30%"/>
                        <Post width="30%"/>
                    </div>
                    <div>
                        <Post width="30%"/>
                        <Post width="30%"/>
                        <Post width="30%"/>
                    </div> */}
                </div>
                </div>
            </div>
        );
    }
}

