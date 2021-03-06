import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from '../api';
import "./loginForm.css";


export default class signupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        secondname: "",
        pseudo: "",
        email: "",
        password: ""
    };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.secondname.length > 0 && this.state.pseudo.length > 0 
        && this.state.email.length > 0 && this.state.password.length > 0;
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
        name: this.state.name,
        secondname: this.state.secondname,
        pseudo: this.state.pseudo,
        email: this.state.email,
        password: this.state.password
    };
    
    API.post(`signup`, user, config)
      .then(res => {
        this.props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="name" bsSize="large">
            <ControlLabel>First name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="secondname" bsSize="large">
            <ControlLabel>Second name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.secondname}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="pseudo" bsSize="large">
            <ControlLabel>Pseudo</ControlLabel>
            <FormControl
              type="text"
              value={this.state.pseudo}
              onChange={this.handleChange}
            />
          </FormGroup>
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
            Sign up
          </Button>
        </form>
      </div>
    );
  }
}