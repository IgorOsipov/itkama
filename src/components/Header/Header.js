import React from 'react';
import c from './Header.module.css';

const Header = () => {
    return (
        <header className = {c.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="Logo" />
        </header>
    );
}

export default Header;