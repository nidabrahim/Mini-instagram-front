import React, { Component } from 'react';
import Avatar from '../assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-responsive-modal';
import PostForm from './postForm';


export default class MiniProfile extends Component {

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
            <div className="miniprofile-container">
                <div className="photo-container" >
                    <img alt="profile" src={Avatar} width="160px" height="160px"/>
                </div>
                <div className="miniprofile-content">
                    <div className="pseudo">
                        <h1>Pseudo name</h1>
                        <button className="insta-btn" type="button">Edit profile</button>
                        <button className="insta-btn" type="button" onClick={this.onOpenModal} ><FontAwesomeIcon icon={faPlus} /></button>
                        <Modal open={open} onClose={this.onCloseModal} center>
                            <div className="popup-container">
                                <PostForm onHide={this.onCloseModal} />
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <h3 className="username">Username</h3>
                        <br/>
                        <span>
                            Follow me and you'll eat your phone 🍽
                            <br/>
                            Eat with your eyes 😍
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}