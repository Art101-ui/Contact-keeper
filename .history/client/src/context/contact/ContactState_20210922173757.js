import React, {useReducer}from "react";

import ContactContext from "./contactContext"
import contactReducer from "./contactReducer"
import axios from "axios";


import {
    GET_CONTACTS,    
    ADD_CONTACT, 
    DELETE_CONTACT, 
    SET_CURRENT,
    CLEAR_CURRENT,   
    UPDATE_CONTACT,
    CLEAR_CONTACTS,
    FILTER_CONTACTS,
    CLEAR_FILTER, 
    CONTACT_ERROR
} from '../type'

const ContactState = props => {
    const initialState = {
        contacts : null,
        current:null,
        filtered:null,
        error:null
    }
    
    const [state, dispatch] = useReducer(contactReducer, initialState)
    //  Get Contact
    const getContact = async ()=>{
        
       try {
           const res = await axios.get('/api/contacts')
           dispatch({
               type:GET_CONTACTS,
               payload: res.data
           })
       } catch (err) {
           dispatch({
               type:CONTACT_ERROR,
               payload:err.response.msg
           })
       }
    }
    // Add Contact
    const addContact = async (contact)=>{
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
       try {
           const res = await axios.post('/api/contacts',contact,config)
           dispatch({
               type:ADD_CONTACT,
               payload: res.data
           })
       } catch (err) {
           dispatch({
               type:CONTACT_ERROR,
               payload:err.response.message
           })
       }
    }
    // Delete Contact
    const deleteContact = (id)=>{
       dispatch({
           type:DELETE_CONTACT,
           payload:id
       })
    }
    // Clear Contacts
    const clearContacts = ()=>{
        dispatch({
            type:CLEAR_CURRENT
            
        })
     }


    // SetCurrent Contact
    const setCurrent = (contact)=>{
        dispatch({
            type:SET_CURRENT,
            payload:contact
        })
     }

    // ClearCurrent Contact
    const clearCurrent = ()=>{
        dispatch({
            type:CLEAR_CURRENT
            
        })
     }

    // Update Contact
    const updateContact = (contact)=>{
        dispatch({
            type:UPDATE_CONTACT,
            payload:contact
        })
     }

    // Filter Contacts
    const filterContacts = (text)=>{
        dispatch({
            type:FILTER_CONTACTS,
            payload:text
        })
     }

    // Clear Filter
    const clearFilter = ()=>{
        dispatch({type:CLEAR_FILTER})
    }

    return(
       <ContactContext.Provider
       value={{
           contacts:state.contacts,
           current:state.current,
           filtered:state.filtered,
           error:state.error,
           addContact,
           deleteContact,
           getContact,
           updateContact,
           setCurrent,
           clearCurrent,
           filterContacts,
           clearContacts,
           clearFilter
       }}>
           {props.children}
       </ContactContext.Provider>
    )
}

export default ContactState