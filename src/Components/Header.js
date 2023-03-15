import React from 'react'


export const Header = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <ul>
                    <li className='active'>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/Galerie">Galery</a>
                    </li>
                    <li>
                        <a href="/Tarifs_et_Prestations">Price</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
            </div>
            <img src='../annexe/images/menu-btn.png' alt='bouton menu' className='menu-hamburger' />
        </nav>
    )
}
export default Header;