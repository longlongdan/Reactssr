import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeState } from '../../components/Header/store/actions';



const Login = (props) => {

    // useEffect(()=>{
    //     goLogin();
    // })

    const goLogin = () => {
        fetch('/api/login.json?secret=PP87ANTIPIRATE')
        .then(res => {
            return res.data;
        })
        .then(res => {
            props.changeLogin();
        })
    } 


    return (
        <div>
            <button onClick={goLogin}>登录</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.login.login
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: ()=> {dispatch(changeState)}
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);