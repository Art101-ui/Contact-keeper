import React from "react";
import uuid from "uuid"
import contactContext from "./contactContext"
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