const express = require('express');
const app = express();

const Home = require('./containers/Home')

app.get("/",(req,res)=>{
    res.end("hello");
})
app.listen('3000',()=>{
    console.log("服务器已经启动");
})