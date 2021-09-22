import React, {Fragment,useContext} from 'react'
import ContactsItem from './ContactsItem'
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const {contacts,filtered} = contactContext;

    if(contacts.length===0){
        return <h4>Please add Contact</h4>
    }
    return (
        <Fragment>
            {filtered!==null?filtered.map(contact=>(
                <ContactsItem key ={contact.id} contact = {contact}/>
            )):
            contacts.map(contact=>(
                <ContactsItem key ={contact.id} contact = {contact}/>
            ))}
        </Fragment>
    )
}


export default Contacts
