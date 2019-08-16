import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';

import { changeState } from './store/actions'

const Header = (props) => {
    let { login, getLoginState } = props;

    useEffect(() => {
        getLoginState();
    },[])

    const logout = () => {
        fetch('/api/logout.json?secret=PP87ANTIPIRATE').then(()=> {
            getLoginState();
        }
        )
    }

    const goLogin = () => {
        fetch('/api/login.json?secret=PP87ANTIPIRATE')
        .then(res => {
            return res.json();
        })
        .then(res => {
            props.changeLogin();
        })
    }

    const fanyi = () => {
        console.log("翻译列表");
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <br/>
            {
                login
                ?(<React.Fragment><button onClick={fanyi}>翻译列表</button><br/><button onClick={logout}>退出</button></React.Fragment>)
                :<button onClick={goLogin}>登录</button>
            }
            { renderRoutes(props.route.routes) }
        </div>
    )
}

Header.getData = (dispatch) => {
    return dispatch(changeState)
}

const mapStateToProps = (state) => ({
    login: state.login.login
})
const mpaStateToDispatch = dispatch => ({
    getLoginState: () => dispatch(changeState),
    changeLogin: ()=> {dispatch(changeState)}
})

export default connect(mapStateToProps,mpaStateToDispatch)(Header);