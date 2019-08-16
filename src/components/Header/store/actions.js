import { CHANGE_LOGIN } from './constants';
export const changeState = (dispatch, getState, fetch) => {
    return fetch('/api/isLogin.json?secret=PP87ANTIPIRATE')
    .then(res => {
        return res.json();
    })
    .then(res => {
        dispatch({
            type: CHANGE_LOGIN,
            login: res.data.login
        })
    })
    .catch(err => {
        console.log("error:" + err)
    })
}