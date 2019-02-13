import React, { Component } from 'react';
import API from './../api';

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

class UserProvider extends Component {

  state = {
    user: {},
    posts: []
  }

  componentDidMount(){
    const access_token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: access_token,
        'Content-Type': 'application/json'
      }
    }

    API.get("me", config)
    .then(res => {
      const user = res.data.user;
      const posts = user.posts;
      this.setState({ user, posts });
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }

  render () {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
export default UserProvider