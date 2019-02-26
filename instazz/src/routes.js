import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Explore from "./components/explore";
import User from "./components/user";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import AppliedRoute from "./components/AppliedRoute";
import App from './App';
import Home from './components/home';



export default ({ childProps }) =>
    <Switch>

        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/app" exact component={App} props={childProps} />
        <AppliedRoute path="/login" exact component={LoginForm} props={childProps} />
        <AppliedRoute path="/signup" exact component={SignupForm} props={childProps} />
        <AppliedRoute path="/profile" exact component={User} props={childProps} />
        <AppliedRoute path="/explore" exact component={Explore} props={childProps} />

        { /* Finally, catch all unmatched routes */ }
        {/* <Route component={NotFound} /> */}

    </Switch>;
