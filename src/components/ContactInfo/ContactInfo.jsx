import { useState } from "react"

const ContactInfo = ({ contact }) => {

    const [detailsClassName, setDetailsClassName] = useState('inactive')

    const switchPanel = () => {
        if (detailsClassName === 'inactive') {
            setDetailsClassName('active')
        }

        if (detailsClassName === 'active') {
            setDetailsClassName('inactive')
        }
    }


    return (
        <article className={`contactInfo ${detailsClassName}`} onClick={switchPanel}>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <hr />
            <p>{contact.age} years old, {contact.gender}. From {contact.address?.city}.</p>
            <p>Looking for {contact.meetingPreferences?.lookingFor}</p>
            <hr />
            <h2>Personal stats</h2>
            <p>{contact.height} cm, {contact.weigth} kg, {contact.bodyType} type</p>
            <p>Hair color: {contact.hairColor}</p>
            <hr />
            <p>Interests: {contact.interests?.map(elm => `${elm}, `)}</p>
            <p>Meet at: {contact.meetingPreferences?.meetAt.map(elm => `${elm}, `)}</p>
        </article>
    )
}

export default ContactInfo