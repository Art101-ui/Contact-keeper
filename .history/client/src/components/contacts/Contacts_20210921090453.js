import React, {Fragment,useContext} from 'react'
import ContactsItem from './ContactsItem'
import ContactContext from '../../context/contact/contactContext'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const {contacts,filtered} = contactContext;

    if(contacts.length===0){
        return <h4>Please add Contact</h4>
    }
    return (
        <TransitionGroup>
            <Fragment>
                {filtered!==null?filtered.map(contact=>(
                 <CSSTransition key ={contact.id} timeout = {500} className='item'>
                    <ContactsItem  contact = {contact}/>
                </CSSTransition>
                )):
                contacts.map(contact=>(
                    <CSSTransition key ={contact.id} timeout = {500} className='item'>
                    <ContactsItem  contact = {contact}/>
                </CSSTransition>
                ))}
            </Fragment>
        </TransitionGroup>
    )
}


export default Contacts
