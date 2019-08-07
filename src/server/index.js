const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');

import { render } from '../untils'


app.use(express.static('public'));

app.use('/api',proxy({
    target: 'http://47.95.113.63/ssr'
}))

app.get("*",(req,res)=>{
    render(req, res)
})
app.listen('3000',()=>{
    console.log("服务器已经启动");
})