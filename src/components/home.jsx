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
	}
	
	  render() {
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

