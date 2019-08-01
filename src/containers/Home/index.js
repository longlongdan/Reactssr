import React, { useReducer } from "react"

import Header from '../../components/Header'
import Reducer from '../../reducer'

const Home = () => {
    let [state, dispatch] = useReducer(Reducer,{name:'xiaolong', num: 0})

    const hello = ()=> {
        setTimeout(()=>{
            dispatch({type: 'change'})
        }, 1000)
    }

    return(
        <div>
            <Header/>
            {state.name}
            <button onClick={hello}>WELCOME TO Home!</button>
        </div>
    )
}

export default Home;