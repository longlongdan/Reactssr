import React, { useReducer, useEffect } from "react"
import { connect } from "react-redux";

import { getHomeList } from './reducer/actions';

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
            {props.data?props.data.map(item=><div key={item.id}>{item.title}</div>):''}
        </div>
    )
}
Home.getData = (dispatch) => {
    // console.log(api);
    return dispatch(getHomeList);
}

const mapStateToProps = (state) => {
    return {
        data: state.home.data||""
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData: ()=>{ dispatch(getHomeList); }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);