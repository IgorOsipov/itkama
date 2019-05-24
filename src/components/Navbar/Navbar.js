import React from 'react';
import {NavLink} from 'react-router-dom';
import { NavWrapper, NavList } from './NavbarStyles';

const Navbar = () => {
    return (
        <NavWrapper>
            <NavList>
                <li><NavLink  to="/profile">Profile</NavLink></li>
                <li><NavLink  to="/dialogs">Messages</NavLink></li>
                <li><NavLink  to="/news">News</NavLink></li>
                <li><NavLink  to="/music">Music</NavLink></li>
                <li><NavLink  to="/users">Find Users</NavLink></li>
                <li><NavLink  to="/settings">Settings</NavLink></li>
            </NavList>
        </NavWrapper>
    );
}

export default Navbar;