import React from 'react';
import logo from '../logo.png';

// header component wit logo linked back to index page
const Header = () => {
    return (
        <header className="shadow-md py-3">
            <img className="m-auto max-h-16" src={logo} alt="MyDiscs Logo"  />
        </header>
    );
}

export default Header;