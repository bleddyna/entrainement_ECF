import React from 'react';
const Header = () => {

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-elements">
                    <ul className='menu'>
                        <li className='active' >
                            <a href="/" className='nav-link'>Accueil</a>
                        </li>
                        <li>
                            <a href="/Galerie" className='nav-link' >Galerie</a>
                        </li>
                        <li>
                            <a href="/Tarifs_et_Prestations" className='nav-link' >tarifs et prestations</a>
                        </li>
                        <li>
                            <a href="/Contact" className='nav-link' >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}
export default Header