import { React, useState } from 'react';
import { NavLink } from "react-router-dom";
import Hamburger from '../annexe/images/bouton-menu.png'

const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <img src={Hamburger} alt="Hamburger menu" />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : "pending"
                                }>
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Galerie"
                                className={({ isActive }) =>
                                    isActive ? "active" : "pending"
                                }>
                                Galerie
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Tarifs_et_Prestations"
                                className={({ isActive }) =>
                                    isActive ? "active" : "pending"
                                }>
                                Présations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact"
                                className={({ isActive }) =>
                                    isActive ? "active" : "pending"
                                }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}
export default Header