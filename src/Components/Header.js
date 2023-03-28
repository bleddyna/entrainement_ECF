import React from 'react';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar">
            <div className='menu'>
                <NavLink to="/messages"
                    className={({ isActive }) =>
                        isActive ? "active" : "pending"
                    }>
                    Accueil
                </NavLink>
                <NavLink to="/Galerie"
                    className={({ isActive }) =>
                        isActive ? "active" : "pending"
                    }>
                    Galerie
                </NavLink>
                <NavLink to="/Tarifs_et_Prestations"
                    className={({ isActive }) =>
                        isActive ? "active" : "pending"
                    }>
                    Présations
                </NavLink>
                <NavLink to="/Contact"
                    className={({ isActive }) =>
                        isActive ? "active" : "pending"
                    }>
                    Contact
                </NavLink>
            </div>
        </nav>
    )

}
export default Header