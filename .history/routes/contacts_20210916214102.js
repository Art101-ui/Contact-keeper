const express = require('express')

const router = express.Router()



router.get('/',(req,res)=>{
    res.send('Get all Contacts')
})


router.post('/',(req,res)=>{
    res.send('Add contacts')
})

router.put('/:id',(req,res)=>{
    res.send('Update contact')
})

router.delete('/:id',(req,res)=>{
    res.send('Delete contact')
})


module.exports = router