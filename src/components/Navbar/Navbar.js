import React from 'react';
import {NavLink} from 'react-router-dom';
import nav from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={nav.main_nav}>
            <ul className={nav.navbar}>
                <li><NavLink className={nav.item} activeClassName={nav.active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={nav.item} activeClassName={nav.active} to="/dialogs">Messages</NavLink></li>
                <li><NavLink className={nav.item} activeClassName={nav.active} to="/news">News</NavLink></li>
                <li><NavLink className={nav.item} activeClassName={nav.active} to="/music">Music</NavLink></li>
                <li><NavLink className={nav.item} activeClassName={nav.active} to="/settings">Settings</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;