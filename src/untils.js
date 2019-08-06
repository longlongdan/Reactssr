import React, { useReducer } from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routers from './router';
// import Reducer from './reducer'


export const render = (req) => {
    // const [state, dispatch] = useReducer(Reducer,{})
    const content = renderToString(
        <StaticRouter context={{}} location={req.path}>
            { renderRoutes(Routers) }
        </StaticRouter>

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
