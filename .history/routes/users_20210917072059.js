const express = require('express')

const router = express.Router()
const{check,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const User = require('../models/User')



router.post('/',[
    check('name','Please input your name').not().isEmpty(),
    check('email','Please enter a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min:6})
],async (req,res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    // from the data we collected from registration
    const {name,password,email} = req.body

    try {
        // compare with 
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({msg:'User already exists'})
        }
        user = new User({
            name,
            email,
            password
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password,salt)

        await user.save()

        res.send('User saved')
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router