import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    Home,
    AdminLogin,
    AdminPanel,
    UserLogin,
    UserProfile,
    UserSignUp,
    ErrorPage,
    AboutMe,
    Contact
} from './';
import Navbar from '../components/Navbar';

export default function Routes() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/admin/login" component={AdminLogin}/>
                <Route path="/admin" component={AdminPanel}/>
                <Route path="/user/login" component={UserLogin}/>
                <Route path="/user/profile" component={UserProfile}/>
                <Route path="/user/signup" component={UserSignUp}/>
                <Route path="/about" component={AboutMe}/>
                <Route path="/contact" component={Contact}/>
                <Route path="*" component={ErrorPage}/>
            </Switch>
        </Router>
    )
}
