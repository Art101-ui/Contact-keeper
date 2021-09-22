import React,{useContext, useState,useEffect} from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Register = () => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)
    const {setAlert} = alertContext
    const {register,error,clearErrors,isAuthenticated} = authContext

    useEffect((props)=>{
        if(isAuthenticated){
            props.history.push('/')
        }
        if(error ==='User already exists'){
            setAlert(error,'danger')
            clearErrors()
        }
        // eslint-disable-next-line
    },[error,isAuthenticated,props.history])
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name,email,password,password2} = user

    const onChange = (e)=>
       setUser({
           ...user,[e.target.name] : e.target.value
       })
    const onSubmit = (e)=>{
        e.preventDefault()
        if(name===''||email===''||password===''){
            setAlert('Please enter all fields','danger')
        }else if(password2!==password){
            setAlert('Passwords do not match','danger')
        }else{
            register({name,password,email})
        }
    }
       
       
   
    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Register</span></h1>
            <form >
                <div className="form-group">
                    <label htmlFor="name"/>Name
                    <input type="text" name="name" value={name} onChange={onChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="email"/>Email Address
                    <input type="text" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password"/>Password
                    <input type="text" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2"/>Confirm Password
                    <input type="text" name="password2" value={password2} onChange={onChange} />
                </div>
                <input type="submit" value="Register" className='btn btn-primary btn-block' onClick={onSubmit} />
            </form>
        </div>
    )
}

export default Register