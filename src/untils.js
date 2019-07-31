import React from 'react';
import { renderToString } from 'react-dom/server'
import {StaticRouter} from 'react-router-dom';

import Router from './router';

export const render = (req) => {
    const content = renderToString(
        <StaticRouter context={{}} location={req.path}>
            <Router/>
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
