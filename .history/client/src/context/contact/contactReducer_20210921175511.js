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


// eslint-disable-next-line
export default (state,action) =>  {
    
        switch (action.type) {
            case ADD_CONTACT:
                return{
                    ...state,
                    contacts:[...state.contacts,action.payload]
                }
            case DELETE_CONTACT:
                return{
                    ...state,
                    contacts:state.contacts.filter(contact=>contact.id!==action.payload)
                }  
            case SET_CURRENT:
                return{
                    ...state,
                    current:action.payload
                }  
            case UPDATE_CONTACT:
                return{
                    ...state,
                    contacts:state.contacts.map(contact=>contact.id===action.payload.id ? action.payload : contact)
                }  
            case FILTER_CONTACTS:
                return{
                    ...state,
                   filtered:state.contacts.filter(contact=>
                    {
                        const regEx = new RegExp(`${action.payload}`,'gi')
                        return contact.name.match(regEx)||contact.email.match(regEx)|| contact.phone.match(regEx)
                    })
                }
            case CLEAR_FILTER:
                return{
                    ...state,
                    filtered:null
                }  
            case CLEAR_CURRENT:
                return{
                    ...state,
                    current:null
                }  
                
        
            default:
                return{
                    state
                }
        }
    
}
