import React from 'react'


export const Header = () => {
    return (
        <header>
            <label className='hamburger-menu'>
                <input type="checkbox" />
            </label>
            <aside className='sidebar'>

                <h1>Charles Cantin - Photographe</h1>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/Galerie'>Galerie</a></li>
                        <li><a href='/Tarifs_et_Prestations'>Préstations</a></li>
                        <li><a href='/Contact'>Contact</a></li>
                    </ul>
                </nav>
            </aside>
        </header>
    )
}
export default Header;