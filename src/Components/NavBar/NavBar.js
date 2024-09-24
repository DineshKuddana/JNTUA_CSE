import React, { useState } from "react";
import "./NavBar.css";
import { Link} from 'react-router-dom';
import Form from './Form.js';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    return (
        <>
            <nav className={`navbar ${isOpen ? "open" : ""}`}>
                <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/academics">Academics</Link></li>
                    <li><Link to="/library">Library</Link></li>
                    <li><Link to="/faculty">Faculty</Link></li>
                    <li><Link to="/students">Students</Link></li>
                    <li><Link to="/achievements">Achievements</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                    <li><button onClick={() => setShowLoginPage(true)} className='name'><p>Register</p></button>
                        <Form
                            show={showLoginPage}
                            onClose={() => setShowLoginPage(false)}

                        /></li>
                    {/* <li><button className='name'><p>HOD</p></button></li> */}
                </ul>
                <div className="toggle-button" onClick={toggleMenu}>
                    {isOpen ? <>&times;</> : <>&#9776;</>}
                </div>
            </nav>
        </>
    );
  }
export default NavBar;