import React, { Component } from 'react';
import API from './../api';

export const PostContext = React.createContext()

export const PostConsumer = PostContext.Consumer

class PostProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: this.props.post,
            updateLike: this.updateLike,
            addComment: this.addComment
        }
    }

    componentDidMount() {
        // const access_token = localStorage.getItem("token");
        // const config = {
        //     headers: {
        //     Authorization: access_token,
        //     'Content-Type': 'application/json'
        //     }
        // }
        // API.get('post/'+this.state.post._id, config)
        // .then(res => {
        //     this.setState({ post: res.data.post });
        // })
        // .catch((error) => {
        //     console.log(error);
        // })

    }

    updateLike = post => {
        const access_token = localStorage.getItem("token");
        const config = {
            headers: {
            Authorization: access_token,
            'Content-Type': 'application/json'
            }
        }
        const upost = {
            likes: post.likes + 1
        };
        API.put('post/'+post._id+'/likes/update', upost, config)
        .then(res => {
            this.setState({ post: res.data.post });
        })
        .catch((error) => {
            console.log(error);
        })
    };

    addComment = comment => {
        const access_token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: access_token,
            'Content-Type': 'application/json'
          }
        }
        // const comment = {
        //     body: this.state.body,
        //     author: this.state.author
        // };
        API.post('post/'+this.state.post._id+'/comments/add', comment, config)
          .then(res => {
            this.setState({ post: res.data.post });
            console.log(res.data.post);
        })
        .catch((error) => {
            console.log(error);
        })
    };


    render () {
        return (
        <PostContext.Provider value={this.state}>
            {this.props.children}
        </PostContext.Provider>
        )
    }
}


export default PostProvider