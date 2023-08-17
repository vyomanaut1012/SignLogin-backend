const user=require("../models/sign");
// const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");
require("dotenv").config();
exports.login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        // console.log("email",email);
        // console.log("Password",password);

        let existingUser = await user.findOne({ email });
        console.log(existingUser);
        if (!existingUser) {
            return res.status(200).json({
                success: true,
                message: "NotRegistered",
            });
        }
        const payload={
            email:existingUser.email,
            id:existingUser._id,
        };
        if(await bcrypt.compare(password,existingUser.password)){
            //  generate token using jwt
            //    let token= jwt.sign(payload ,process.env.JWT_SECRET,
            //      {
            //       expiresIn:"2h"
            //      });          
            //    userdata=userdata.toObject();
            //    userdata.token=token;
            //    userdata.password=undefined;
                // console.log(token);
                //   const options={
                //     expires:new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                //     httpOnly:true,
                //   }
      
      
                //  res.cookie("token", token ,options).status(200).json({
                //     success:true,
                //     token,
                //     existingUser,
                //     message:"cokkies are build successsfully and user login successsfully",          
                //  });
                 return res.status(200).json({
                    success: true,
                    message: "Login successful",
                });

         }else{
            return res.json({
                success:true,
                message:"wrongPassword"
            })
         }
       
       
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success: true,
            message: "An error occurred",
        });
    }
}    