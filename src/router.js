
import Home from './containers/Home'
import Transition from './containers/Transition'
import Header from './components/Header';
import NotFound from './containers/notFound';


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
                path: '/transition',
                getData: Transition.getData,
                component: Transition
            },{
                component: NotFound
            }
        ]
    }
]