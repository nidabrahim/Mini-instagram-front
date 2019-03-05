import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBarComponent from './components/NavBarComponent/NavBarComponent';

import Routes from './routes';
import { withRouter } from "react-router-dom";


class LangingPage extends Component {
	constructor(props){
		super(props);
		this.state={
			navBarShrink:"",
			isAuthenticated: false,
      isAuthenticating: true
		};
		this.handleScroll = this.handleScroll.bind(this);
	  }
	
		userHasAuthenticated = authenticated => {
			this.setState({ isAuthenticated: authenticated });
		}

	  componentDidMount(){
		window.addEventListener('scroll', this.handleScroll);
		this.handleScroll();
	  }
	
	  componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	  }
	
	  handleScroll(event){
		const domNode = ReactDOM.findDOMNode(this.navEl);
		const nbs = window.pageYOffset>100 ? "navbar-shrink" : "";
		this.setState({navBarShrink:nbs});
		}
		
		handleLogout = event => {
			this.userHasAuthenticated(false);
			this.props.history.push("/login");
		}
	
	  render() {
		const nbs = this.state ? this.state.navBarShrink : "";
		const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }
		return (
		  <div>
				<NavBarComponent navBarShrink = {nbs} childProps={childProps} logout={this.handleLogout} />
				<Routes childProps={childProps}/>
		  </div>
		);
	  }
}

export default withRouter(LangingPage);

