import React, { Component } from 'react';
import Avatar from '../assets/images/avatar.jpg';


export default class MiniProfile extends Component {
    render() {
        return (
            <div className="miniprofile-container">
                <div className="photo-container" >
                    <img alt="profile" src={Avatar} width="160px" height="160px"/>
                </div>
                <div className="miniprofile-content">
                    <div className="pseudo">
                        <h1>Pseudo name</h1>
                        <button type="button">Edit profile</button>
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