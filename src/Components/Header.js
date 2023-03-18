import React from 'react';

export const Header = () => {
    const navLinks = document.querySelector(".nav-links")

    const handleClick = () => {
        navLinks.classList.toggle('mobile-menu')

    };
    return (
        <nav className="navbar">
            <div className="nav-links">
                <ul>
                    <li >
                        <a href="/" className={'active'}>Home</a>
                    </li>
                    <li>
                        <a href="/Galerie" >Galery</a>
                    </li>
                    <li>
                        <a href="/Tarifs_et_Prestations" >Price</a>
                    </li>
                    <li>
                        <a href="/Contact" >Contact</a>
                    </li>
                </ul>
            </div>
            <button onClick={handleClick} className='menu-hamburger'></button>
        </nav>
    )
}
export default Header;