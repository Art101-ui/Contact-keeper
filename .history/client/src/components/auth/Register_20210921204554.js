import React,{useState} from 'react'
import AlertContext from '../../context/alert/alertContext'

const Register = () => {
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
        console.log('Register Submit')
    }
       
       
   
    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Register</span></h1>
            <form >
                <div className="form-group">
                    <label htmlFor="name"/>Name
                    <input type="text" name="name" value={name} onChange={onChange} />
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
                    <label htmlFor="password"/>Confirm Password
                    <input type="text" name="password" value={password2} onChange={onChange} />
                </div>
                <input type="submit" value="Register" className='btn btn-primary btn-block' onClick={onSubmit} />
            </form>
        </div>
    )
}

export default Register