import { useEffect, useState } from "react"
import ContactCard from "../ContactCard/ContactCard"
import Header from "../Header/Header"


function UsersGridPage() {

    useEffect(() => {

        fetch('https://multiapi-app.fly.dev/contacts/')
            .then(res => res.json())
            .then(data => setContacts(data))
    }, [])

    const [contacts, setContacts] = useState([])


    return (
        <>
            <Header />

            <main className="contactsGrid">
                {
                    contacts.length && contacts.map(elm => <ContactCard contactInfo={elm} />)
                }
            </main>
        </>
    )
}

export default UsersGridPage