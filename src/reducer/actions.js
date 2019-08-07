export const showInfo = (info) => {
    return {
        type: 'show',
        info: info.data
    }
}

export const getHomeList = (dispatch, getState, fetch) => {
    return fetch('/api/news.json?secret=PP87ANTIPIRATE')
     .then((res)=>{
         return res.json();
     })
     .then((res)=>{
        //  console.log(res)
        dispatch(showInfo(res))
     })
     .catch((err)=>{
         console.log(err)
     })
}