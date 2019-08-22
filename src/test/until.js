import React, { useReducer } from 'react';
import { renderToString } from 'react-dom/server'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom';


import Routers from './router';
import reducer from './reducer';
import MyContext from '../context';
// import { getServerStore } from "./store";

let a= null;

const Test = (props)=>{
    a = useReducer(reducer,{ name:'1111' });

    // const [state, dispatch] = a;
    // console.log("jjjjjjj",a);
    // // console.log("服务端"+myContext);
    // dispatch({
    //     type: 'change'
    // })
    // //相当于conmponetDidMount 如何使用dispatch
    // console.log(a);

    return (
        <MyContext.Provider value={{app:a}}>
            <StaticRouter context={{}} location={props.req.path}>
                { renderRoutes(Routers) }
            </StaticRouter>
        </MyContext.Provider>
    )
}


export const render = (req, res) => {
    //匹配路由 获取数据
    const mathPath = matchRoutes(Routers,req.path);
    console.log(mathPath)
    // const promiseAll = [];
    // console.log(mathPath);
    const content = renderToString(
        <Test req={req}></Test>
    )
    // console.log(a);
    mathPath.map(path=>{ path.route.getData? path.route.getData(a):'' })
    // Promise.all(promiseAll).then(()=> {
        // console.log(a);
        res.send (`<html>
            <head>
            <title>just test</title>
                <style></style>
            </head>
            <body>
            <div id="root">${content}</div>
            </body>
            <script>var info = </script>
        </html>`)
    // })
    
}
