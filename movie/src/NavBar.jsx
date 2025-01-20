import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css"

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1 className="navbar-title">Movie</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;