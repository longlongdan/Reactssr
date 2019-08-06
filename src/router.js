
import React from 'react';

import Home from './containers/Home'
import Login from './containers/Login'
import Detail from './containers/Detail'


export default [
    {
        path: '/',
        exact: true,
        getData: Home.getData,
        component: Home,
        routes: [
            {
                path: '/detail',
                getData: ()=>{console.log('getData login')},
                component: Detail
            }
        ]
    },{
        path: '/Login',
        getData: ()=>{console.log('getData login')},
        component: Login
    }
]

// export default [
//     {
//         component: Login,
//         routes: [
//             {
//                 path: '/aa',
//                 exact: true,
//                 component: Home,
//                 routes: [
//                     {
//                         path: '/detail',
//                         component: Detail
//                     }
//                 ]
//             },
//             {
//                 path: '/Login',
//                 component: Login
//             }
//         ]
//     }
// ]