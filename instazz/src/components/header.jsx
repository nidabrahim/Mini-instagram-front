import React, { Component } from 'react';
import CartIcon from '../assets/logos/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="iconDiv">
                        <img src={CartIcon} width="100"/>
                    </div>
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}