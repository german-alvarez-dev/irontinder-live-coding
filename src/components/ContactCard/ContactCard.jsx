import { Link } from "react-router-dom"

const ContactCard = ({ contactInfo }) => {

    return (
        <div className="contactCard">
            <Link to={`/details/${contactInfo.id}`}>
                <img src={contactInfo.avatar} />
                <div className="contactInfo">
                    <p className="name">{contactInfo.firstName} {contactInfo.lastName}</p>
                    <p className="age">{contactInfo.age}</p>
                </div>
            </Link>
        </div>
    )
}

export default ContactCard