import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import './App.css';
//import 'font-awesome/css/font-awesome.css';

import {FooterComponent}  from './components/FooterComponent/FooterComponent';
import {SocialComponent} from './components/SocialComponent/SocialComponent';
import {CallToActionComponent} from './components/CallToActionComponent/CallToActionComponent';
import {FeaturesComponent} from './components/FeaturesComponent/FeaturesComponent';
import {AppDownloadComponent} from './components/AppDownloadComponent/AppDownloadComponent';
import HeroComponent from './components/HeroComponent/HeroComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import { Link, withRouter } from "react-router-dom";


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
				{/* <HeroComponent />
				{/* <AppDownloadComponent />
				<FeaturesComponent />
				<CallToActionComponent />
				<SocialComponent />
				<FooterComponent /> */} 
		  </div>
		);
	  }
}

export default withRouter(LangingPage);

