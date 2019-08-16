import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config'

import Routers from './router';
import { getServerStore } from "./store";



export const render = (req, res) => {
    //匹配路由 获取数据
    // const Store = createStore(Reducer, applyMiddleware(thunk.withExtraArgument(fetchServer)));
    const Store = getServerStore(req);
    const mathPath = matchRoutes(Routers,req.path);
    const promiseAll = [];
    // console.log(req.path,mathPath)
    mathPath.map(path=>{ path.route.getData? promiseAll.push(path.route.getData(Store.dispatch)):'' })
    //console.log(Store.getState());
    // console.log("获取数据"+Store);
    //使用promise.all在所有异步请求完成之后执行对应的render函数
    Promise.all(promiseAll).then(()=> {
        const content = renderToString(
            <Provider store={Store}>
                <StaticRouter context={{}} location={req.path}>
                    { renderRoutes(Routers) }
                </StaticRouter>
            </Provider>
        )
        res.send (`<html>
            <head>
                <title>服务端渲染</title>
            </head>
            <body>
            <div id="root">${content}</div>
            </body>
            <script>var info = ${JSON.stringify(Store.getState())}</script>
            <script src="./index.js"></script>
        </html>`)
    })
    
}
