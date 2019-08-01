import React from "react"
import { connect } from 'react-redux'

import Header from '../../components/Header'


let hello = ()=> {
    alert("123");
}
const Home = (props) => {
    return(
        <div>
            <Header/>
            {props.name}
            <button onClick={hello}>WELCOME TO Home!</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps)(Home);