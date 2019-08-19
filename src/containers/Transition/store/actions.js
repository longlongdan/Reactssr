export let changeList = (list) => {
    return {
        type: 'changeList',
        list
    }
}


export let getTranstionList = (dispatch, getState, fetch) => {
    return fetch('/api/translations.json')
    .then(res => {
        return res.json();
    })
    .then(res => {
        dispatch(changeList(res.data))
    })
    .catch(err => {
        console.log("error:" + err)
    })
};