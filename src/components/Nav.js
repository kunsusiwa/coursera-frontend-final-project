import React from 'react'
import logo from '../icons_assets/Logo.svg';
import { Link } from 'react-router-dom';
import "../styles/Nav.css"

function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservation">Reservations</Link>
                </li>
                <li>
                    <Link to="/onlineorder">Order Online</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav