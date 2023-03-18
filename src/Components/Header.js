import React from 'react'
    ;

export const Header = () => {
    const navLink = document.querySelector('.nav-links');

    const handleClick = () => {
        navLink.classList.toggle('mobile-menu')
    }

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
            <button onClick={handleClick} className='hamburger-menu'><span></span></button>
        </nav>
    )
}
export default Header;