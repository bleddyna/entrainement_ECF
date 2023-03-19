import React from 'react'
import mariage from "../annexe/images/mariage.jpg";
import grossesse from "../annexe/images/grossesse.jpg";
import bebe from "../annexe/images/bebe.jpg";
import famille from "../annexe/images/famille.jpg";
import bapteme from "../annexe/images/bapteme.jpg";
import couple from "../annexe/images/couple.jpg";
import portrait from "../annexe/images/portrait.jpg";

const Galery = (props) => {
    const cardPicture = [
        { name: 'Mariage', picture: mariage },
        { name: 'Grossesse', picture: grossesse },
        { name: 'Bébé', picture: bebe },
        { name: 'Famille', picture: famille },
        { name: 'Baptême', picture: bapteme },
        { name: 'Couple', picture: couple },
        { name: 'portrait', picture: portrait }
    ]




    return (
        <div className='galery'>
            {cardPicture.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <h2>{item.name}</h2>
                        <img src={item.picture} alt={item.picture} />
                    </div>
                )
            })}
        </div>
    )
}
export default Galery;