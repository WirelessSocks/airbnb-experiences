import React from 'react';
import Logo from './airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="airbnb logo" className='nav--logo'/>
        </nav>
    );
}