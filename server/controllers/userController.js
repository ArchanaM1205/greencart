import User from "../modals/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


//register User :/api/user/register
export const register=async(req,res)=>{
    try {
        const{name,email,password}=req.body;
if(!name || 
    !email || !password
){
    return res.jsom({success:false,message:"Missing Details"})
}

const existingUser=await User.findOne({email})

if(existingUser)
    return res.jsom({success:false,message:"user Already Exists"})

const hashedPassword=await bcrypt.hash(password,10)

const user=await User.create({name,email,password:hashedPassword})
const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
res.cookie('token',token,{
    httpOnly:true,//Prevent JS to access cookie
    secure:process.env.NODE_ENV==='production',//Use secure cookie in production
    sameSite:process.env.NODE_ENV==='production'?'none':'strict',//CSRF protection
    maxAge:7*24*60*60*1000//Cookie expiration time
})
    return res.jsom({success:true,user:{email:user.email,name:user.name}})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message});
    }
}