import React, { Component, Fragment } from "react";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "./components/header";
import Explore from "./components/explore";
import User from "./components/user";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import { Link, withRouter } from "react-router-dom";
import Routes from "./routes"
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FormControl, FormGroup } from 'react-bootstrap';
import CartIcon from './assets/logos/logo.png';

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
                    {this.state.isAuthenticated
                      ? 
                        <Fragment>
                          <div><Link to="/explore">Explore</Link></div>
                          <div><Link to="/profile">Profile</Link></div>
                          <NavItem onClick={this.handleLogout}>Logout</NavItem>
                        </Fragment>
                      : <Fragment>
                          <div><Link to="/signup">Signup</Link></div>
                          <div><Link to="/login">Login</Link></div>
                        </Fragment>
                    }
                </div>
            </div>

            <Routes childProps={childProps} />
          </div>
      // <div className="App">
 
      //       <div className="main">
      //         <Navbar fluid collapseOnSelect>
      //           <Navbar.Header>
      //             <Navbar.Brand>
      //               <Link to="/">InstaZZ</Link>
      //             </Navbar.Brand>
      //             <Navbar.Toggle />
      //           </Navbar.Header>
      //         </Navbar>
      //         <Routes />
      //           {/* <LoginForm/>
      //           <SignupForm/>
      //           <Route path="/user" component={User} /> */}
      //       </div>

      
      //     {/* <Router>
      //       <div className="main">
      //           <Header/>
      //           <Route exact path="/" component={Explore} />
      //           <Route path="/user" component={User} />
      //       </div>
      //     </Router> */}
      // </div>
    );
  }
}

export default withRouter(App);
