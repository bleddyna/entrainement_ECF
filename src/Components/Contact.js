import React from 'react'
const Contact = () => {


    return (
        <div className="contact">
            <form >
                <h2>Contactez-moi</h2>
                <input type="text" id="name" placeholder="Votre nom" required />
                <input type="email" id="email" placeholder="votre adresse mail" required />
                <textarea id="message" rows="4" placeholder="Ecrivez quelque chose.." required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;