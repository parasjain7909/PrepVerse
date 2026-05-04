import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie-parser'
import blacklisttokenModel from "../models/blacklisttoken.model.js";
/**
 * 
 * @name registercontroller
 * @description user register route 
 * @returns 
 */
export async function registercontroller(req,res){
       const{username,email,password}=req.body;
       if(!username || !email || !password){
        return res.status(400).json({
            message:"please provide all details"
        })
       }
       const isuser=await userModel.findOne({$or:[{username,email}]})
       if(isuser){
        return res.status(400).json({
            message:"user already exists"
        })
       }
       const hash=await bcrypt.hash(password,10)
       const user= await userModel.create({
        username,
        email,
        password:hash
       })
      const token= jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"1d"}
      )
      res.cookie("token",token)
      res.status(201).json({
        message:"user is created successfully",
        token
      })
}
/**
 * @name login route
 * @description according to the user login
 * 
 */
export async function logincontroller(req,res) {
  const {email,password}=req.body;
  const user= await userModel.findOne({email})
  if(!user){
   return res.status(400).json({
    message:"no user found with this email"
   })
  }
  const userpass= await bcrypt.compare(password,user.password)
  if(!userpass){
    return res.status(400).json({
      message:"your entering wrong password"
    })
  }
  const token = jwt.sign(
    {id:user.id,username:user.username},
    process.env.JWT_SECRET_KEY,
    {expiresIn:"1d"}

  )
  res.cookie("token",token)
  res.status(200).json({
    message:"user logged in successfully",
    user:{
      user:user.username,
      email:user.email

    }
  })
}
/**
 * @name logout route get
 * @description block the token
 */
export async function logoutcontroller(req,res){
  const token= req.cookies.token
  if(token){
    await blacklisttokenModel.create({token})

  }
  res.clearCookie("token")
  res.status(200).json({
    message:"user logout successfully"
  })
}