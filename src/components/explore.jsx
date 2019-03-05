import React, { Component } from 'react';
import Post from "./post";
import PostsProvider from '../providers/postsProvider';
import { PostsConsumer } from './../providers/postsProvider'
import PostProvider from '../providers/postProvider';
import UserProvider from '../providers/userProvider';



export default class Explore extends Component {

    render() {
        return (
            <UserProvider>
            <PostsProvider>
                <div className="main-container">
                    <div className="all-posts">
                        <div>
                        <PostsConsumer>
                        {({ posts }) => (
                            <div>
                                { posts.map(post =>  <PostProvider post={post} ><Post width="30%" /></PostProvider> )}
                            </div>
                        )}
                        </PostsConsumer>
                        </div>
                    </div>
                </div>
            </PostsProvider>
            </UserProvider>
        );
    }
}

