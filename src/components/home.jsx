import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './../App.css';
import 'font-awesome/css/font-awesome.css';

import {FooterComponent}  from './FooterComponent/FooterComponent';
import {SocialComponent} from './SocialComponent/SocialComponent';
import {CallToActionComponent} from './CallToActionComponent/CallToActionComponent';
import {FeaturesComponent} from './FeaturesComponent/FeaturesComponent';
import {AppDownloadComponent} from './AppDownloadComponent/AppDownloadComponent';
import HeroComponent from './HeroComponent/HeroComponent';
import NavBarComponent from './NavBarComponent/NavBarComponent';


class Home extends Component {
	constructor(props){
		super(props);
		// this.state={navBarShrink:""};
		// this.handleScroll = this.handleScroll.bind(this);
	  }
	
	//   componentDidMount(){
	// 	window.addEventListener('scroll', this.handleScroll);
	// 	this.handleScroll();
	//   }
	
	//   componentWillUnmount() {
	// 	window.removeEventListener('scroll', this.handleScroll);
	//   }
	
	//   handleScroll(event){
	// 	const domNode = ReactDOM.findDOMNode(this.navEl);
	// 	const nbs = window.pageYOffset>100 ? "navbar-shrink" : "";
	// 	this.setState({navBarShrink:nbs});
	//   }
	
	  render() {
		// const nbs = this.state ? this.state.navBarShrink : "";
		return (
		  <div>
				<CallToActionComponent />
				<FeaturesComponent />
				<SocialComponent />
				<FooterComponent />
		  </div>
		);
	  }
}

export default Home;

