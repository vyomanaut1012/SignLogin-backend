const express=require("express");
const router=express.Router();


const {signup}=require("../controllers/signup");
const {userapi}=require("../controllers/userapi");
const {login}=require("../controllers/login");

router.post("/signup",signup);
router.get("/userapi",userapi);
router.post("/login",login);

module.exports=router;