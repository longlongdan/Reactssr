import { Route } from 'react-router-dom';
import React from 'react';

import Home from './containers/Home'
import Login from './containers/Login'

const Router = () => {
    return (
        <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Login" exact component={Login}></Route>
        </div>
    )
}

export default Router;