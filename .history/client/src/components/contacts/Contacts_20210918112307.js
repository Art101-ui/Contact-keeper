import React, {Fragment,useContext} from 'react'
import contactContext from '../../context/contact/contactContext'
import contactContext from '../../context/contact/contactContext'
const Contacts = () => {
    const contactContext = useContext(contactContext)

    const {contacts} = contactContext;
    return (
        <Fragment>
            {contacts.map(contact=>(
                <h3>{contact.name}</h3>
            ))}
        </Fragment>
    )
}


export default Contacts
