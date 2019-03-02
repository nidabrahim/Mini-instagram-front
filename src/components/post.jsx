import React, { Component } from 'react';
import Images from '../assets/images/images.jpg';
import Modal from 'react-responsive-modal';
import Avatar from '../assets/images/avatar.jpg';
import Comment from './comment';
import { UserConsumer } from '../providers/userProvider';
import { PostConsumer, PostContext } from '../providers/postProvider';
import API from '../api';
import ImageLoader from 'react-image-file';


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

    // componentDidMount() {
    //     console.log(this.context.post.img);

    //     const img = {
    //         path : this.context.post.img
    //     }

    //     const access_token = localStorage.getItem("token");
    //     const config = {
    //       headers: {
    //         Authorization: access_token,
    //         'Content-Type': 'application/json'
    //       }
    //     }

    //     API.post("post/path", img, config)
    //     .then(res => {
    //         const image = res.data.toString('base64');
    //         console.log('Image : ',image);
    //         this.setState({ image : image});
            
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     })
    // }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;

        const imgUrl = "https://nodejs-mongo-persistent-instazz.7e14.starter-us-west-2.openshiftapps.com/api/image/"+this.context.post._id;
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

// const PostProvider = value => (
//     <PostContext.Provider value={value}>
//       <Post />
//     </PostContext.Provider>
// );

// export default PostProvider