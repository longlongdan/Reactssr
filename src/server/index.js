const express = require('express');
const app = express();

import { render } from '../untils'


app.use(express.static('public'));
app.get("*",(req,res)=>{
    render(req, res)
})
app.listen('3000',()=>{
    console.log("服务器已经启动");
})