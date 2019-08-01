import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Router from '../router'
import Rducer from '../reducer'

const Store = createStore(Rducer, applyMiddleware(thunk));

const App = () => {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(
    <App/>,
    document.getElementById("root")
)