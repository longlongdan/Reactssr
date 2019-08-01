import React, { useReducer } from "react"

import Header from '../../components/Header'
import Reducer from '../../reducer'

let hello = ()=> {
    alert("123");
}
const Home = () => {
    let [state, setState] = useReducer(Reducer,{name:'xiaolong', num: 0})
    return(
        <div>
            <Header/>
            {state.name}
            <button onClick={hello}>WELCOME TO Home!</button>
        </div>
    )
}

export default Home;