import React, { Component } from 'react';
import Avatar from '../assets/images/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-responsive-modal';
import ConnectedPostForm from './postForm';
import API from '../api';
import { UserConsumer } from './../providers/userProvider'
import UserForm from './userForm';
import ConnectedUserForm from './userForm';

export default class MiniProfile extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        open: false,
        editOpen: false
    };
    
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    onOpenEditModal = () => {
        this.setState({ editOpen: true });
    };
    
    onCloseEditModal = () => {
        this.setState({ editOpen: false });
    };

    render() {
        const { open, editOpen } = this.state;
        return (
            <UserConsumer>
                {({ user }) => (
                <div className="miniprofile-container">
                    <div className="photo-container" >
                        <img alt="profile" src={Avatar} width="160px" height="160px"/>
                    </div>
                    <div className="miniprofile-content">
 
                        <div>
                            <h3 className="username">{user.name} {user.secondname}</h3>
                            <br/>
                            <span>@{user.pseudo}</span>
                            <br/>
                            <span>
                                {user.description}
                                <br/>
                                {user.email}
                            </span>
                        </div>
                        <div className="btn-profile-container" >
                            <button className="insta-btn btn btn-outline btn-xl js-scroll-trigger" type="button" onClick={this.onOpenEditModal}>Edit profile</button>
                            <button className="insta-btn" type="button" onClick={this.onOpenModal} ><FontAwesomeIcon icon={faPlus} /></button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                                <div className="popup-container">
                                    <ConnectedPostForm onHide={this.onCloseModal} />
                                </div>
                            </Modal>
                            <Modal open={editOpen} onClose={this.onCloseEditModal} center>
                                <div className="popup-container">
                                    <ConnectedUserForm onHide={this.onCloseEditModal} />
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
                )}
            </UserConsumer>
        );
    }
}