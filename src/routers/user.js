
/*some routes for fun change*/
const express=require('express')
const User=require('../models/user')
const auth=require('../middleware/auth')

const router =new express.Router()

/*login*/
router.post('/users/login',async (req,res)=>{
    try {
        const user=await User.findByCredentials(req.body.email,req.body.password)
        const token=await user.generateAuthToken()

        res.send({user,token})
    } catch (e) {

        //console.log(e)
        res.status(400).send()
    }
})

/*for logout*/
router.post('/users/logout',auth,async (req,res)=>{
  try {
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token!=req.token
        })

        await req.user.save()

        res.send()
  } catch (e) {
      console.log(e)
      res.status(500).send()
  }
})