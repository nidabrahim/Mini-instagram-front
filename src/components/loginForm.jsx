import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from '../api';
//import "./loginForm.css";

import { Switch, Route } from 'react-router-dom';
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";



export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const user = {
        email: this.state.email,
        password: this.state.password
    };

    API.post(`login`, user, config)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.userHasAuthenticated(true);
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="Login">
         <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="btn btn-outline btn-xl js-scroll-trigger"
          >
            Login
          </Button>
        
        </form>
      </div>
    );
  }
}