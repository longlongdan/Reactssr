const express = require('express');
const app = express();
import React from 'react';
import { renderToString } from 'react-dom/server'

import Home from '../containers/Home'

app.use(express.static('public'));
var home = renderToString(<Home />);
app.get("/",(req,res)=>{
    res.send(`<html>
        <head>
            <title>服务端渲染</title>
        </head>
        <body>
        <div id="root">${home}</div>
        </body>
        <script src="./index.js"></script>
    </html>`)
})
app.listen('3000',()=>{
    console.log("服务器已经启动");
})