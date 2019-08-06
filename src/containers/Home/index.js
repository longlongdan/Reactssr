import React, { useReducer, useEffect } from "react"
import fetch from 'node-fetch'
import { connect } from "react-redux";

import Header from '../../components/Header'
// import Reducer from '../../reducer'
import { showInfo } from '../../reducer/actions'

const Home = (props) => {

    useEffect(()=>{
        // console.log(props);
        // Home.getData(store);
        if(!props.data) {
            props.getData();
        }
    },[])

    return(
        <div>
            <Header/>
            {props.data?props.data.map(item=><div key={item.id}>{item.title}</div>):''}
        </div>
    )
}
Home.getData = (dispatch) => {
    return fetch('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')
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
const mapStateToProps = (state) => {
    return {
        data: state.data||""
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData: ()=>{ Home.getData(dispatch) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);