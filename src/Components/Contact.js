import React from 'react'

export const Contact = () => {
    return (
        <form>
            <label htmlFor="fname">Prénom</label>
            <input type="text" name="firstname" />
            <label htmlFor="lname">Nom</label>
            <input type="text" />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit"></input>
        </form>
    )
}
