import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/Login'>Login</Link>
            <br />
            <Link to='/detail'>detail</Link>
        </div>
    )
}

export default Header;