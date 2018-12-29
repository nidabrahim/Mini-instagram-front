import React, { Component } from 'react';
import CartIcon from '../assets/logos/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="iconDiv">
                        <img src={CartIcon} width="100"/>
                    </div>
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="What are you looking for ?"/>
                    </div>
                    <div className="btn-container">
                        <div><Link to="/">Explore</Link></div>
                        <div><Link to="/user">User</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}