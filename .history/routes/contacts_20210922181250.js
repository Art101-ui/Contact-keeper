const express = require('express')

const router = express.Router()
const{check,validationResult} = require('express-validator')
const auth = require('../middleware/auth')
const User = require('../models/User')
const Contact = require('../models/Contacts')


router.get('/',auth, async (req,res)=>{
    try {
       const contacts =await Contact.find({user:req.user.id}).sort({date:-1}) 
       res.json(contacts)
    } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error')
    }
})


router.post('/',[auth,
      check('name','Name is required').not().isEmpty()
],async (req,res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {name,email,phone,type}=req.body

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user:req.user.id
        })
        const contact = await newContact.save()
        res.json(contact)
    } catch (err) {
        console.err(err.message)
        res.status(500).send('Server Error')
    }
})

router.put('/:id',(req,res)=>{
    res.send('Update contact')
})

router.delete('/:id', auth, async (req, res) => {
    try {
      let contact = await Contact.findById(req.params.id);
      if (!contact) return res.status(404).json({ msg: 'Contact not found' });
  
      // make sure user owns the contact
      if (contact.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      // delete the contact
      await Contact.findByIdAndRemove(req.params.id);
      res.json({ msg: 'Contact removed' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });


module.exports = router