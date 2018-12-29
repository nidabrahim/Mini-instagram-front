import React, { Component } from 'react';
import Images from '../assets/images/images.jpg';
import Modal from 'react-responsive-modal';
import Avatar from '../assets/images/avatar.jpg';
import Comment from './comment';

export default class Post extends Component {

    constructor(props) {
        super(props);
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
        return (
            <div className="post" style={{width: `${this.props.width}`}}>

                <img src={Images} alt="post" width="100%" onClick={this.onOpenModal} />

                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className="popup-container">
                        <div className="pic-popup" >
                            <img src={Images} alt="post" width="95%"/>
                        </div>
                        <Comment/>
                    </div>
                </Modal>

            </div>
        );
    }
}