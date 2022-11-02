import User from "../models/user"
import {hashPassword,comparePassword} from '../helpers/auth'
const bcrypt = require('bcrypt')

export const register = async (req,res)=>{
    // console.log('REGISTER API ENDPOINT',req.body)

    const {name,email,password,secret}=req.body

    if(!name)return res.status(400).send('Name is required')
    if(!password || password.length < 6 )return res.status(400)
    .send('Password is required and should be more than 6 characters')
    if(!secret)return res.status(400).send('Answer is required')

    const exists = await User.findOne({email})
    if(exists)return res.status(400).send('E-mail exists')

   const hashedPassword = await hashPassword(password)
   const user = new User({name,email,password:hashedPassword,secret})

   try{
  await user.save()
  return res.json({
    ok:true,
  })

   } catch(err){
    console.log('register failed=>',err)
    return res.status(400).send('error try again')
   }
}

export const login = async (req, res, next) => {
  const {email,password}=req.body

    const user = await User.findOne({ email, password })
    const valid = await comparePassword(hashPassword.toString(), password)

    if(user)return res.status(200).send('login successful')
    if(valid)return res.status(200).send('success')
    if(!user || !valid)return res.status(400).send('check password or email')
   

      
    }
 

    
    
      // const {email,password}=req.body
      // const user = await User.findOne({ email :email, password:password })
     
      // const valid = await bcrypt.compare(password,user.password)

      // if (user){
      //   return  res.status(200).send('login successful')
      // }else{
      //   return res.status(400).send('check email or password')
      // }

      


  
    

  

