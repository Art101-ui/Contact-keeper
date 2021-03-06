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


// eslint-disable-next-line
export default (state,action) =>  {
    
        switch (action.type) {
            case ADD_CONTACT:
                return{
                    ...state,
                    contacts:[...state.contacts,action.payload],
                    loading:false
                }
            
            case GET_CONTACTS:
                return{
                    ...state,
                    contacts:[action.payload],
                    loading:false
                    
                }
            
            case DELETE_CONTACT:
                return{
                    ...state,
                    contacts:state.contacts.filter(contact=>contact.id!==action.payload),
                    loading:false
                }  
             case UPDATE_CONTACT:
                    return{
                        ...state,
                        contacts:state.contacts.map(contact=>contact.id===action.payload.id ? action.payload : contact),
                        loading:false
                    }  
            case SET_CURRENT:
                return{
                    ...state,
                    current:action.payload
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
            case CONTACT_ERROR:
                return{
                    ...state,
                    error:action.payload
                }
                
        
            default:
                return{
                    state
                }
        }
    
}
