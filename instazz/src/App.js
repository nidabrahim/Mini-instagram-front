import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./components/header";
import Explore from "./components/explore";
import User from "./components/user";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div className="main">
                <Header/>
                <Route exact path="/" component={Explore} />
                <Route path="/user" component={User} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
