import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import LangingPage from './landingPage';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(<Router><LangingPage /></Router>, document.getElementById('root'));

serviceWorker.unregister();
