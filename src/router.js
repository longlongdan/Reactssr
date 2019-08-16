
import Home from './containers/Home'
import Login from './containers/Login'
import Header from './components/Header';


export default [
    {
        path: '/',
        component: Header,
        getData: Header.getData,
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