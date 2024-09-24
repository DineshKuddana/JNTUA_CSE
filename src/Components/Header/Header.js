import React from 'react';
import './Header.css';
import logo from './logo.webp';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="College Logo" className="college-logo" />
                <div className="text-container">
                    <h1 className="heading-primary">JNTUA College of Engineering (Autonomous) Ananthapuramu</h1>
                    <h2 className="heading-secondary">Department of Computer Science and Engineering</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;
