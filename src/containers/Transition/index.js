import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getTranstionList } from './store/actions';


const Transition = (props) => {
    useEffect(()=>{
        if(props.isLogin)
            props.getTranstionList();
    },[])


    return (
        <div>
            {
                props.isLogin
                ?(props.list?(props.list.map(item => <div key={item.id}>{item.title}</div>)):"")
                :<Redirect to="/"></Redirect>
            }
        </div>
    )
}

Transition.getData = (dispatch) => {
    return dispatch(getTranstionList)
}

const mapStateToProps = (state) => ({
    isLogin: state.login.login,
    list: state.transition.list
})

const mapDispatchToProps = (dispatch) => ({
    getTranstionList: ()=> {dispatch(getTranstionList)}
})

export default connect(mapStateToProps,mapDispatchToProps)(Transition);