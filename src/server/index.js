const express = require('express');
const app = express();

import { useReducer } from 'react'
import { matchRoutes } from 'react-router-config'

import { render } from '../untils'
import routes from '../router'
import Reducer from '../reducer'

// const [state, dispatch] = useReducer(Reducer,{data:[]})

app.use(express.static('public'));
app.get("*",(req,res)=>{
    const mathPath = matchRoutes(routes,req.path);
    // console.log(req.path,mathPath)
    // mathPath.map(path=>{ path.route.getData? path.route.getData():'' })
    res.send(render(req))
})
app.listen('3000',()=>{
    console.log("服务器已经启动");
})