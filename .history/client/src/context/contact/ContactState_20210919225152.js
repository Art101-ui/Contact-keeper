import React, {useReducer}from "react";
import uuid from "uuid"
import ContactContext from "./contactContext"
import contactReducer from "./contactReducer"

import {
    GET_CONTACTS,    
    ADD_CONTACT, 
    DELETE_CONTACT, 
    SET_CURRENT,
    CLEAR_CURRENT,   
    UPDATE_CONTACT,
    CLEAR_CONTACTS,
    FILTER_CONTACTS,
    CLEAR_FILTER 
} from '../type'

const ContactState = props => {
    const initialState = {
        contacts : [
            {
            id:1,
            name:'Jill Johnson',
            email:'111-111-1111',
            type:'personal'
        },
            {
            id:2,
            name:'Tunde Jackson',
            email:'111-221-1111',
            type:'personal'
        },
            {
            id:3,
            name:'Bill Janeson',
            email:'241-111-1111',
            type:'professional'
        }
    ]
    }
    
    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact

    // Delete Contact

    // SetCurrent Contact

    // ClearCurrent Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return(
       <ContactContext.Provider
       value={{
           contacts:state.contacts
       }}>
           {props.children}
       </ContactContext.Provider>
    )
}

export default ContactState