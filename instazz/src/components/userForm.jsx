import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import API from '../api';
import { UserConsumer, UserContext } from './../providers/userProvider'
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

class UserForm extends React.Component {

  state = {
    name: this.props.user.name,
    secondname: this.props.user.secondname,
    pseudo: this.props.user.pseudo,
    email: this.props.user.email,
    description: this.props.user.description,
    user: this.props.user
  }

  getValidationState(){ }

  handleChange = event => {
   
    const target = event.target;

    if(target.name === 'name'){
      this.setState({ name: event.target.value });
    }
    else if(target.name === 'secondname'){
        this.setState({ secondname: event.target.value });
    }
    else if(target.name === 'pseudo'){
        this.setState({ pseudo: event.target.value });
    }
    else if(target.name === 'email'){
        this.setState({ email: event.target.value });
    }
    else if(target.name === 'description'){
      this.setState({ description: event.target.value });
    }

  }

  handleSubmit = event => {
    event.preventDefault();
    const access_token = localStorage.getItem("token");
    const { user } = this.state;
    const config = {
      headers: {
        Authorization: access_token,
        'Content-Type': 'application/json'
      }
    }

    const newUser = {
        name: this.state.name,
        secondname: this.state.secondname,
        pseudo:  this.state.pseudo,
        email: this.state.email,
        description:  this.state.description
    };


    API.post('user/'+user._id+'/update', newUser, config)
    .then(result => {
    this.props.onHide();
    console.log(result.data);
    })
    .catch((error) => {
    console.log(error);
    })

  }

  render() {

    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
            <ControlLabel>First name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Enter name"
              name="name"
              onChange={this.handleChange} />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
            <ControlLabel>Second name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.secondname}
              placeholder="Enter second name"
              name="secondname"
              onChange={this.handleChange} />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
            <ControlLabel>Pseudo</ControlLabel>
            <FormControl
              type="text"
              value={this.state.pseudo}
              placeholder="Enter pseudo"
              name="pseudo"
              onChange={this.handleChange} />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="text"
              value={this.state.email}
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange} />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl 
              componentClass="textarea" 
              value={this.state.description} 
              placeholder="Enter description" 
              name="description" 
              onChange={this.handleChange} />
            </FormGroup>

            
          <button className="submitButton btn btn-outline btn-xl js-scroll-trigger" type="submit"  >Edit profile</button>

        </form>

      </div>
    )
  }

}

const ConnectedUserForm = props => (
    <UserConsumer>
      {({ user }) => (
        <UserForm
          {...props}
          user={user}
        />
      )}
    </UserConsumer>
  )
  export default ConnectedUserForm