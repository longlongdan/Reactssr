import React from 'react';
import { renderToString } from 'react-dom/server'
import {StaticRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Router from './router';
import Reducer from './reducer'

const Store = createStore(Reducer, applyMiddleware(thunk));

export const render = (req) => {
    const content = renderToString(
        <Provider store={Store}>
            <StaticRouter context={{}} location={req.path}>
                <Router/>
            </StaticRouter>
        </Provider>

    )
    return (`<html>
        <head>
            <title>服务端渲染</title>
        </head>
        <body>
        <div id="root">${content}</div>
        </body>
        <script src="./index.js"></script>
    </html>`)
}
