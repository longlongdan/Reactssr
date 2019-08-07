
import Home from './containers/Home'
import Login from './containers/Login'
import Detail from './containers/Detail'
import Header from './components/Header';


// export default [
//     {
//         path: '/',
//         exact: true,
//         getData: Home.getData,
//         component: Home,
//         routes: [
//             {
//                 path: '/detail',
//                 getData: ()=>{console.log('getData login')},
//                 component: Detail
//             }
//         ]
//     },{
//         path: '/Login',
//         getData: ()=>{console.log('getData login')},
//         component: Login
//     }
// ]

export default [
    {
        path: '/',
        component: Header,
        routes: [
            {
                path: '/',
                exact: true,
                getData: Home.getData,
                component: Home,
            },
            {
                path: '/Login',
                getData: ()=>{console.log('getData login')},
                component: Login
            }
        ]
    }
]