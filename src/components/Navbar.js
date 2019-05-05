import React from 'react';
import nav from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={nav.main_nav}>
            <ul className={nav.navbar}>
                <li><a className={`${nav.item} ${nav.active}`} href="#">Profile</a></li>
                <li><a className={nav.item} href="#">Messages</a></li>
                <li><a className={nav.item} href="#">News</a></li>
                <li><a className={nav.item} href="#">Music</a></li>
                <li><a className={nav.item} href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;