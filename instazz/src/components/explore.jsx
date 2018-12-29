import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import Post from "./post";


export default class Explore extends Component {
  render() {
    return (
        <div className="main-container">
            <div className="all-posts">
            <div>
                <div>
                    <Post width="30%"/>
                    <Post width="30%"/>
                    <Post width="30%"/>
                </div>
                <div>
                    <Post width="30%"/>
                    <Post width="30%"/>
                    <Post width="30%"/>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

