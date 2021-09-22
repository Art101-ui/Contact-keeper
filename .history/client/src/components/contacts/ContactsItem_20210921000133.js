import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext';



const ContactsItem = ({contact}) => {
    const contactContext = useContext(ContactContext)

    const {id,name,email,phone,type} = contact

    const {deleteContact,setCurrent,clearCurrent} = contactContext

    const onDelete = (e)=>{
        e.preventDefault();
        deleteContact(id)
        clearCurrent()
    }
    return (
       <div className="card bg-light">
           <h3 className="text-primary text-left">
           {name}{' '}
           <span style ={{float:'right'}} 
             className={
                 'badge '+ 
                 (type==='professional' ? 'badge-success' : 'badge-primary')}>{type.charAt(0).toUpperCase()+type.slice(1)}</span></h3>
                 <ul className='list'>
                     {email && <li>
                         <i className="fas fa-envelope-open">{' '}{email}</i>
                     </li> }
                     {phone && <li>
                            <i className="fas fa-phone">{' '}{phone}</i>
                     </li> }                    
                 </ul>
                 <p className="button btn btn-dark btn-sm" onClick= {()=> setCurrent(contact)}>Edit</p>
                 <p className="button btn btn-danger btn-sm" onClick ={onDelete}>Delete</p>
       </div>
    );
};

ContactsItem.prototype ={
    contact:PropTypes.object.isRequired,
}

export default ContactsItem
