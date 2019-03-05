import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Comment from './comment';
import { PostConsumer, PostContext } from '../providers/postProvider';


export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image : ""
        }
    }

    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;

        const imgUrl = "https://nodejs-mongo-persistent-instazz.7e14.starter-us-west-2.openshiftapps.com/api/image/"+this.context.post._id;
        // const imgUrl = "http://localhost:8080/api/image/"+this.context.post._id;
        
        console.log(imgUrl);

        return (
            <PostConsumer>
            {({ post }) => (
                <div className="post" style={{width: this.props.width}}>
                
                    <img src={imgUrl} alt="post" width="100%" onClick={this.onOpenModal} />
                    
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <div className="popup-container">
                            <div className="pic-popup" >
                                <img src={imgUrl} alt="post" width="95%"/>
                            </div>
                            <div className="post-description">
                                <span className="title">
                                    {post.title}
                                </span>
                                <div className="desc" >
                                    {post.description}
                                </div>
                            </div>

                            <Comment />
                        
                        </div>
                    </Modal>

                </div>
            )}
            </PostConsumer>
        );
    }
}
Post.contextType = PostContext;