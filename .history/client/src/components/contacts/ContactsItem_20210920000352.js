import React from 'react'

const ContactsItem = ({contact}) => {

    const {id,name,email,phone,type} = contact
    return (
       <div className="card bg-light">
           <h3 className="text-primary text-left">
           {name}{' '}
           <span style ={{float:'right'}} 
             className={
                 'badge '+ 
                 (type==='professional' ? 'badge-success' : 'badge-primary')}>{type.charAt(0).toUpperCase()+type.slice(1)}</span></h3>
       </div>
    );
};

export default ContactsItem
