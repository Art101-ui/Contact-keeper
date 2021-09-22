import React, { useContext,useRef,useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactsFilter = () => {
    const contactContext = useContext(ContactContext)

    const text = useRef('')

    const {filterContact,clearfilter,filtered} = contactContext

    useEffect(()=>{
        if(filtered ===null){
            text.current.value = ''
        }
    })

    const onChange = (e)=>{
      if(text.current.value!==''){
        filterContact(e.target.value)
      }else{
          clearfilter()
      }
    }
    return (
        <div>
           <form >
               <input ref={text} type="text" placeholder="Filter Contacts..." ref={text} onChange={onChange} />
           </form> 
        </div>
    )
}

export default ContactsFilter
