import React, {useReducer}from "react";
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"
import axios from "axios";


import {
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    REGISTER_SUCCESS
} from '../type'

const AuthState = props => {
    const initialState = {
        token:localStorage.getItem('token'),
        isAuthenticated:null,
        loading:true,
        error:null,
        user:null
        
    }
    
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Load User
    // Register User
    const register =async formData =>{
        const config = {
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }
        try{
            const res = await axios.post('http://localhost:5000/api/users',formData,config)
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })
            console.log(res.data)
        }catch(err){
            dispatch({
                type:REGISTER_FAIL,
                payload : err.response.data.msg

            })
        }
        
    }
    // Login User
    // Logout
    // Clear Errors

    return(
       <AuthContext.Provider
       value={{
           token:state.token,
           isAuthenticated: state.isAuthenticated,
           loading:state.loading,
           user:state.user,
           error:state.error,
           register
       }}>
           {props.children}
       </AuthContext.Provider>
    )
}

export default AuthState