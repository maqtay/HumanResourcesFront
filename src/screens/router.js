import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    Home,
    AdminLogin,
    AdminPanel,
    UserLogin,
    UserProfile,
    UserSignUp
} from './';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/admin/login" component={AdminLogin}/>
                    <Route path="/admin" component={AdminPanel}/>
                    <Route path="/user/login" component={UserLogin}/>
                    <Route path="/user/profile" component={UserProfile}/>
                    <Route path="/user/signup" component={UserSignUp}/>
                    <Route exact path="/" component={Home}/>

                </Switch>
            </Router>
        )
    }
}
