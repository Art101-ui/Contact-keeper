const express = require('express')

const router = express.Router()



router.get('/',(req,res)=>{
    res.send('Get logged in')
})


router.post('/',(req,res)=>{
    res.send('Get logged in')
})