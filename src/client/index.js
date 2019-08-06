import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config';

import Routers from '../router'
import Rducer from '../reducer'
const Store = createStore(Rducer,window.info,applyMiddleware(thunk));

const App = () => {
    return(
        <Provider store={Store}>
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