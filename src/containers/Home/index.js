import React from "react"

let hello = ()=> {
    alert("123");
}
const Home = () => {
    return <button onClick={hello}>lolo</button>
}

export default Home;