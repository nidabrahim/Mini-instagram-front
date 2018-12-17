import React, { Component } from 'react';
import Sample from '../assets/images/sample.jpg';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="profile">
                    <img alt="profile" src={Sample} width="35px" height="35px"/>
                    <span className="name">
                        Reda
                    </span>
                </div>
                <img src={Sample} alt="post" width="400px"/>
                <div className="Comments">
                    <div className="Comment">

                    </div>
                </div>
            </div>
        );
    }
}