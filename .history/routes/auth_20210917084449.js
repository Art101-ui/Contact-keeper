const express = require('express')

const router = express.Router()
const{check,validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const User = require('../models/User')


router.get('/',(req,res)=>{
    res.send('Get logged in')
})


router.post('/',[
    check('email','Please include valid email').isEmail(),
    check('password','Password is required').exists()
],async (req,res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    // from the data we collected from registration
    const {password,email} = req.body
    try {
      let user = await User.findOne({email})
      if(!user){
          return res.status(400).json({msg:'Invalid Credentials'})
      }  
      let isMatch = await bcrypt.compare(password,user.password)
      if(!isMatch){
          return res.status(400).json({msg:'Invalid Credentials'})
      }  
      const payload = {
        user: {
            id:user.id
        }
    }
        jwt.sign(payload,config.get('jwtSecret'),{expiresIn:36000},(err,token)=>{
            if(err) throw err;
            res.json({token})
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router