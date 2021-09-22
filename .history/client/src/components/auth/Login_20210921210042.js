import React,{useState} from 'react'
import AlertContext from '../../context/alert/alertContext'

const Login = () => {
    const [user,setUser]=useState({
         email:'',
         password:''
        
    })

    const {email,password} = user

    const onChange = (e)=>
       setUser({
           ...user,[e.target.name] : e.target.value
       })
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log('Login Submit')
    }
       
       
   
    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Login</span></h1>
            <form >
                <div className="form-group">
                    <label htmlFor="email"/>Email Address
                    <input type="text" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password"/>Password
                    <input type="text" name="password" value={password} onChange={onChange} />
                </div>
                
                <input type="submit" value="Login" className='btn btn-primary btn-block' onClick={onSubmit} />
            </form>
        </div>
    )
}

export default Login