import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const Header = (props) => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/Login'>Login</Link>
            { renderRoutes(props.route.routes) }
        </div>
    )
}

export default Header;