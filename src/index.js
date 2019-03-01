import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import 'bootstrap/dist/css/bootstrap.min.css';

import LangingPage from './landingPage';
import { BrowserRouter as Router } from "react-router-dom";


// ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
ReactDOM.render(<Router><LangingPage /></Router>, document.getElementById('root'));

serviceWorker.unregister();
