import React,{useState,useContext,useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    
    const [contact,setContact] = useState({
        id:'',
        name:'',
        email:'',
        phone:'',
        type:'personal'
    })
    const {name,email,phone,type} = contact

    const {addContact,current,clearCurrent,updateContact} = contactContext

    useEffect(() => {
        if (current!==null) {
            setContact(current)
        }else{
            setContact({
                id:'',
                name:'',
                email:'',
                phone:'',
                type:'personal' 
            })
        }
    }, [current,contactContext])

    const onChange = (e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(current===null){
            addContact(contact)

        }else{
            updateContact(contact)
        }

        clearAll()
        
    }

    const clearAll = ()=>{
        clearCurrent();
    }
        return (    
       
          <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Contact' : "Add Contact"}</h2>
            <input type="text" name="name" placeholder='Name' value={name} onChange={onChange}/>
            <input type="email" name="email" placeholder='Email' value={email} onChange={onChange} required/>
            <input type="number" name="phone" placeholder='Phone-No' value={phone} onChange={onChange} required/>
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={type==='personal'} onChange={onChange} />Personal {''}
            <input type="radio" name="type" value="professional" checked={type==='professional'} onChange={onChange} />Professional 
            <div>
                <input type="submit" value={current ? 'Update Contact' : "Add Contact"} className='btn btn-primary btn-block' />
                {current && <div>
                    <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
                </div>}
            </div>
           </form>
          
        
        
    )
}


export default ContactForm
