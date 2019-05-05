import React from 'react';
import nav from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={nav.main_nav}>
            <ul className={nav.navbar}>
                <li><a className={`${nav.item} ${nav.active}`} href="/profile">Profile</a></li>
                <li><a className={nav.item} href="/dialogs">Messages</a></li>
                <li><a className={nav.item} href="/news">News</a></li>
                <li><a className={nav.item} href="/music">Music</a></li>
                <li><a className={nav.item} href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;