import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../type'


// eslint-disable-next-line
export default (state,action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',
            action.payload.token)
            return{
               ...state,
               ...action.payload,isAuthenticated:true,loading:false
            }
// eslint-disable-next-line
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return{
               ...state,
               token:null,isAuthenticated:false,loading:false,
               user:null,
               error:action.payload
            }
            // eslint-disable-next-line
            console.log(state.error)
// eslint-disable-next-line
        case USER_LOADED:
            return{
               ...state,
               isAuthenticated:true,loading:false,
               user:action.payload
            }
            
// eslint-disable-next-line
        case CLEAR_ERRORS:
            return{
               ...state,
               error:null
            }
            
            
    
        default:
           return state
    }
}