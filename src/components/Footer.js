import React from 'react';

// footer component wit logo linked back to index page
const Footer = () => {
    return (
        <footer className="bg-gray-100 flex flex-row justify-evenly py-3">
            <p>By: Jessica Ejelöv - <a href="jeej2100@student.miun.se">Email</a></p>
            <a href="/">Start</a>
            <a href="/about">About</a>
        </footer>
    );
}

export default Footer;