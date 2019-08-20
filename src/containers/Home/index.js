import React, { useReducer, useEffect } from "react"
import { connect } from "react-redux";

import { getHomeList } from './reducer/actions';
import style from './style.scss';
import withStyle from '../../withStyle';

const Home = (props) => {

    useEffect(()=>{
        if(!props.data) {
            props.getData();
        }
    },[])

    return(
        <div className='info'>
            {props.data?props.data.map(item=><div key={item.id} className='item'>{item.title}</div>):''}
        </div>
    )
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
const HomeNew = connect(mapStateToProps,mapDispatchToProps)(withStyle(Home, style));
HomeNew.getData = (dispatch) => {
    // console.log(api);
    return dispatch(getHomeList);
}
export default HomeNew;