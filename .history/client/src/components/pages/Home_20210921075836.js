import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactsFilter from '../contacts/ContactsFilter'

const Home = () => {
    return (
        <div>
           <div className="grid-2">
               <div>
                  {<ContactForm/>}
               </div>
               <div>
                <ContactsFilter/>
                 <Contacts/>
               </div>
           </div>
        </div>
    )
}

export default Home
