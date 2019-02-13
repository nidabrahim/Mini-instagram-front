import React, { Component } from 'react';
import CartIcon from '../assets/logos/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FormControl, FormGroup } from 'react-bootstrap';

export default class Header extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: ''
        };
    }
    

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="iconDiv">
                        <img src={CartIcon} width="100"/>
                    </div>
                    <div className="search">
                        {/* <input type="text" className="searchTerm" placeholder="What are you looking for ?"/> */}
                        <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                            >
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="What are you looking for ?"
                                onChange={this.handleChange}/>
                        </FormGroup>
                        
                        </form>
                            
                    </div>
                    <div className="btn-container">
                        <div><Link to="/">Explore</Link></div>
                        <div><Link to="/profile">User</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}