const express = require('express');
const app = express();

import { matchRoutes } from 'react-router-config'

import { render } from '../untils'
import routes from '../router'

app.use(express.static('public'));
app.get("*",(req,res)=>{
    const mathPath = matchRoutes(routes,req.path);
    
    mathPath.map(path=>{ path.route.getData? path.route.getData():'' })
    res.send(render(req))
})
app.listen('3000',()=>{
    console.log("服务器已经启动");
})