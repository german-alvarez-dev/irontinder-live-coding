import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ContactInfo from '../ContactInfo/ContactInfo'
import Header from '../Header/Header'
import LikeButton from '../LikeButton/LikeButton'

const UserDetailsPage = () => {

    const { user_id } = useParams()

    const [contact, setContact] = useState({})

    useEffect(() => {
        fetch(`https://multiapi-app.fly.dev/contacts/${user_id}`)
            .then(res => res.json())
            .then(data => setContact(data))
    }, [])

    return (
        <>
            <Header />
            <main className={`contactDetails`}>
                <img src={contact.avatar} className="avatar" />
                <LikeButton />
                <ContactInfo contact={contact} />
            </main>

        </>
    )
}

export default UserDetailsPage