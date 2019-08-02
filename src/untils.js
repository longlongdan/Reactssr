import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Routers from './router';


export const render = (req) => {
    const content = renderToString(
        <StaticRouter context={{}} location={req.path}>
            <React.Fragment>
                {Routers.map( (route, index) => <Route key={index} path={route.path} exact={route.exact} component={route.component} ></Route> )}
            </React.Fragment>
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
