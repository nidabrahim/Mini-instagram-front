import React, { Component } from "react";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from 'react-bootstrap';
import CartIcon from './assets/logos/logo.png';

import 'font-awesome/css/font-awesome.css';

library.add(faIgloo);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  }


  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }
    return (
          <div className="App container">
            <div className="wrapper">
                <div className="iconDiv">
                    <img src={CartIcon} width="100"/>
                </div>
                <div className="search">
                    <form>
                    <FormGroup
                        controlId="formBasicText"
                        >
                        <FormControl
                            type="text"
                        
                            placeholder="What are you looking for ?"
                            />
                    </FormGroup>
                    </form>
                </div>
                <div className="btn-container">
                </div>
            </div>
          </div>
    );
  }
}

export default App;
