const express = require('express');
const app = express();

import { render } from '../untils'
app.use(express.static('public'));
app.get("*",(req,res)=>{
    res.send(render(req))
})
app.listen('3000',()=>{
    console.log("服务器已经启动");
})