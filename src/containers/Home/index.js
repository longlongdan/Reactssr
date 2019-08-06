import React, { useReducer, useEffect } from "react"
import fetch from 'node-fetch'

import Header from '../../components/Header'
import Reducer from '../../reducer'
import { showInfo } from '../../reducer/actions'

const Home = (props) => {
    let [state, dispatch] = useReducer(Reducer,{data:[]})
    useEffect(() => {
        Home.getData(dispatch)
    })

    return(
        <div>
            <Header/>
            {state.data.map((item)=>
                <div key={item.id}>{item.title}</div>
            )}
            {/* <button onClick={hello}>WELCOME TO Home!</button> */}
            {/* { props.children } */}
        </div>
    )
}
Home.getData = (dispatch) => {
     fetch('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
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

export default Home;