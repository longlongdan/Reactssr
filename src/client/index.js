import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { getClientStore } from '../store';
import Routers from '../router'

const App = () => {
    return(
        <Provider store={getClientStore()}>
            <BrowserRouter>
                {/* <React.Fragment>
                    {Routers.map( (route,index) => <Route key={index} path={route.path} exact={route.exact} component={route.component} ></Route> )}
                </React.Fragment> */}
                { renderRoutes(Routers) }
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(
    <App/>,
    document.getElementById("root")
)