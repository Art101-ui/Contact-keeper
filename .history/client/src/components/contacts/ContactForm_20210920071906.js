import React,{useState} from 'react'

const ContactForm = () => {
    const [contact,setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    })
    const {name,email,phone,type} = contact
    return (    
       
          <form>
            <h2 className="text-primary">Add Contact</h2>
            <input type="text" name="name" placeholder='Name' value={name} onChange={onChange}/>
            <input type="text" name="email" placeholder='Email' value={email} onChange={onChange}/>
            <input type="text" name="phone" placeholder='Phone-No' value={phone} onChange={onChange}/>
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={type==='personal'} onChange={onChange} />Personal {''}
            <input type="radio" name="type" value="professional" checked={type==='professional'} onChange={onChange} />Professional 
            <div>
                <input type="submit" value="Add Contact" className='btn btn-primary btn-block' />
            </div>
           </form>
          
        
        
    )
}


export default ContactForm
