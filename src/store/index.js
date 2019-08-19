import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from '../containers/Home/reducer';
import headerReducer from '../components/Header/store';
import fetchClient from '../client/request';
import fetchServer from '../server/request';
import transitionReducer from '../containers/Transition/store'

const reducer = combineReducers({
    home: homeReducer,
    login: headerReducer,
    transition: transitionReducer
})

export const getClientStore = () => {
    return createStore(reducer,window.info,applyMiddleware(thunk.withExtraArgument(fetchClient)))//中间件thunk自定义参数
}
export const getServerStore = (req) => {
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(fetchServer(req))))
}
