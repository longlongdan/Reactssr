const express = require('express');
const app = express();

import { render } from './until'


app.use(express.static('public'));
app.get("*",(req,res)=>{
    render(req, res)
})
app.listen('8888',()=>{
    console.log("服务器已经启动");
})