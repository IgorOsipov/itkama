import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavWrapper, NavList } from './NavbarStyles';

const Navbar = (props) => {
    return (
        <NavWrapper>
            <NavList>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/users">Find Users</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
                <li>{props.isAuth ? 
                    <Link to={`/profile/${props.userId}`}>{props.login}</Link> :
                    <NavLink to='/auth'>Login</NavLink>
                }</li>
            </NavList>

        </NavWrapper>

    );
}

export default Navbar;