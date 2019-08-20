import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';

import { changeState } from './store/actions'
import style from './style.scss';
import withStyle from '../../withStyle';

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

    return (
        <React.Fragment>
            <div className='container'>
                <Link to='/' className='item'>Home</Link>
                {
                    login
                    ?(<React.Fragment><Link to='/transition' className='item'>翻译列表</Link><button onClick={logout} className='item'>退出</button></React.Fragment>)
                    :<button onClick={goLogin} className='item'>登录</button>
                }
            </div>
            { renderRoutes(props.route.routes) }
        </React.Fragment>
    )
}


const mapStateToProps = (state) => ({
    login: state.login.login
})
const mpaStateToDispatch = dispatch => ({
    getLoginState: () => dispatch(changeState),
    changeLogin: ()=> {dispatch(changeState)}
})


const HeaderNew = connect(mapStateToProps,mpaStateToDispatch)(withStyle(Header, style));
HeaderNew.getData = (dispatch) => {
    return dispatch(changeState)
}
export default HeaderNew;