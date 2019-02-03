import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import API from '../api';
import MyUploader from './myUploader'

export default class PostForm extends React.Component {

  state = {
    title: '',
    description: ''
  }

  getValidationState(){
    
  }

  handleChange = event => {
    const target = event.target;;
    if(target.type === 'text'){
      this.setState({ title: event.target.value });
    }
    else if(target.type === 'textarea'){
      this.setState({ description: event.target.value });
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const post = {
        title: this.state.title,
        description: this.state.description
    };

    API.post(`posts`, post, config)
      .then(res => {
        this.props.onHide()
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <label>
              title:
              <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <label>
              description:
              <input type="text" name="description" onChange={this.handleChange} />
          </label>
          <div>
            <button className="insta-btn" type="button">Save</button>
          </div>
        </form> */}

        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="formBasicText" validationState={this.getValidationState()} >
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter title"
              name="title"
              onChange={this.handleChange} />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl 
              componentClass="textarea" 
              value={this.state.value} 
              placeholder="Enter description" 
              name="description" 
              onChange={this.handleChange} />
            </FormGroup>

          <MyUploader/>

          <Button className="insta-btn" type="submit">Submit</Button>

        </form>

      </div>
    )
  }

}