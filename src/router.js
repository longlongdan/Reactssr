
import React from 'react';

import Home from './containers/Home'
import Login from './containers/Login'


export default [
    {
        path: '/',
        exact: true,
        getData: Home.getData,
        component: Home,
        routes: [
            {
                path: '/ttt',
                exact: true,
            }
        ]
    },{
        path: '/Login',
        exact: true,
        getData: ()=>{console.log('getData login')},
        component: Login
    }
]