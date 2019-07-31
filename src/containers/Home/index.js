import React from "react"

import Header from '../../components/Header'

let hello = ()=> {
    alert("123");
}
const Home = () => {
    return(
        <div>
            <Header/>
            <button onClick={hello}>WELCOME TO Home!</button>
        </div>
    )
}

export default Home;