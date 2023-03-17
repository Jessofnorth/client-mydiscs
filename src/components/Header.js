import React from 'react';
import logo from '../logo.png';

// header component wit logo linked back to index page
const Header = () => {
    return (
        <header className="shadow-md py-3">
            <a href='/'><img className="m-auto max-h-24" src={logo} alt="MyDiscs Logo"  /></a>
        </header>
    );
}

export default Header;