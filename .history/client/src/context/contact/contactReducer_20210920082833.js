import React from 'react'
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



export default (state,action) =>  {
    
        switch (action.type) {
            case ADD_CONTACT:
                return{
                    ...state,
                    contacts:[...state.contacts,action.payload]
                }
                
                
        
            default:
                state;
        }
    
}
