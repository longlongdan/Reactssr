import React, { useReducer, useEffect } from "react"
import fetch from 'node-fetch'

import Header from '../../components/Header'
import Reducer from '../../reducer'

const Home = () => {
    let [state, dispatch] = useReducer(Reducer,{name:'xiaolong', num: 0})

    const hello = ()=> {
        setTimeout(()=>{
            dispatch({type: 'change'})
        }, 1000)
    }

    useEffect(() => {
        Home.getData()
    })

    return(
        <div>
            <Header/>
            {state.name}
            {state.num}
            <button onClick={hello}>WELCOME TO Home!</button>
        </div>
    )
}
Home.getData = () => {
     // console.log(123);
     fetch('https://api.github.com/users/chrissycoyier/repos')
     .then((res)=>{
         return res.json();
     })
     .then((res)=>{
         console.log(res)
     })
     .catch((err)=>{
         console.log(err)
     })
}

export default Home;