import React from 'react'

const Price = () => {
    const infos = [
        { title: "Juste moi", price: 130, details: " Séance pour une personne, en extérieur ou en studio" },
        { title: "Pour 2", price: 195, details: "Pour deux personnes, en extérieur ou en studio" },
        { title: "Famille", price: 220, details: "Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)" },
        { title: "Il était une fois", price: 160, details: "Photo de grossesse (À votre domicile, en extérieur ou en studio)" },
        { title: "Mon bébé", price: 100, details: "Photo d’enfant jusqu’à 3 ans (photo à domicile)" },
        { title: "J’immortalise l’événement", price: "sur mesure", details: "Prestation de mariage ou baptême sur devis" }
    ]
    return (
        <div className='price'>
            {infos.map((item, index) => {
                return (
                    <div className="price-detail" key={index}>
                        <h2>"{item.title}" - <span>{item.price}€</span></h2>
                        <p>{item.details}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Price;