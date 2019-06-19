import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper, NavList } from './NavbarStyles';

const Navbar = (props) => {
    return (
        <NavWrapper>
            <NavList>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dialogs">Messages</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/users">Find Users</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li>{props.isAuth ? 
                    <Link to={`/profile/${props.userId}`}>{props.login}</Link> :
                    <Link to='/login'>Login</Link>
                }</li>
            </NavList>

        </NavWrapper>

    );
}

export default Navbar;