import React from 'react'

const ContactsItem = ({contact}) => {

    const {id,name,email,phone,type} = contact
    return (
       <div className="card bg-light">
           <h3 className="text-primary text-left">
           {name}{' '}
           <span 
             className={
                 'badge' + 
                 (type==='professional' ? 'bg-success' : 'badge-primary')}>{type}</span></h3>
       </div>
    );
};

export default ContactsItem
