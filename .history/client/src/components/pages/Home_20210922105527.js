import React, { useContext,useEffect } from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactsFilter from '../contacts/ContactsFilter'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext)
    useEffect(()=>{
        authContext.loadUser();

        // eslint-disable-next-line
    },[])
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
