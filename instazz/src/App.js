import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Post from "./components/post";

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="main">
              <Header/>
              <div className="posts">
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
                  <Post/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
