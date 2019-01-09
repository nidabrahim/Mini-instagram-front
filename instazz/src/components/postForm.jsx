import React, { Component } from 'react';
import API from '../api';

export default class PostForm extends React.Component {
  state = {
    title: '',
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const post = {
        title: this.state.title
    };

    API.post(`posts`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Post title:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}