import React, {Fragment,useContext,useEffect,createRef} from 'react'
import ContactsItem from './ContactsItem'
import ContactContext from '../../context/contact/contactContext'
import Spinner from '../layout/Spinner'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const {contacts,filtered,getContact,loading} = contactContext;

    useEffect(()=>{
       getContact()
    //  eslint-disable-next-line
    },[])


    if(contacts!==null && !loading && contacts.length===0){
        return <h4>Please add Contact</h4>
    }

    const wrapper = createRef();


    return (
        <div >
           <Fragment >
            {contacts !== null && !loading ? (
                <TransitionGroup>
                {filtered!==null?filtered.map(contact=>(
                 <CSSTransition ref = {wrapper}key ={contact._id} timeout = {500} classNames='item'>
                    <ContactsItem  contact = {contact}/>
                </CSSTransition>
                )):
                contacts.map(contact=>(
                    <CSSTransition key ={contact._id} timeout = {500} classNames='item'>
                    <ContactsItem  contact = {contact}/>
                </CSSTransition>
                ))}
                </TransitionGroup>
            ) : <Spinner/> }
            
            </Fragment>
        </div>
            
        
    )
}


export default Contacts
