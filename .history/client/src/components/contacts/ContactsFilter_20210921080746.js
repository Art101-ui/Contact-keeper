import React, { useContext,useRef,useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactsFilter = () => {
    const contactContext = useContext(ContactContext)

    const text = useRef('')

    const {filterContacts,clearFilter,filtered} = contactContext

    useEffect(()=>{
        if(filtered ===null){
            text.current.value = ''
        }
    })

    const onChange = (e)=>{
      if(text.current.value!==''){
        filterContacts(e.target.value)
      }else{
          clearFilter()
      }
    }
    return (
        
           <form >
               <input  type="text" placeholder="Filter Contacts..." ref={text} onChange={onChange} />
           </form> 
        
    )
}

export default ContactsFilter
