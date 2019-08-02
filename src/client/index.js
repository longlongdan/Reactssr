import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routers from '../router'

const App = () => {
    return(
        <BrowserRouter>
            <React.Fragment>
                {Routers.map( (route,index) => <Route key={index} path={route.path} exact={route.exact} component={route.component} ></Route> )}
            </React.Fragment>
        </BrowserRouter>
    )
}

ReactDom.hydrate(
    <App/>,
    document.getElementById("root")
)