import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Router from '../router'

const App = () => {
    return(
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
}

ReactDom.hydrate(
    <App/>,
    document.getElementById("root")
)