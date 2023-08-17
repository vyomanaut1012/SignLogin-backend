const express=require("express");
const app=express();
const cors=require("cors")
const cookieParser=require("cookie-parser");
require("dotenv").config();
app.use(cookieParser());
app.use(express.json());
console.log(process.env.FRONTEND);
app.use(cors({
     origin:process.env.FRONTEND,
     methods: ["GET", "POST"],
     credentials: true,
   }));

const database=require("./configuration/database.js");
database.dbconnect();


const Pathrouter=require("./routes/signdata.js");
app.use("/api",Pathrouter);


const PORT=process.env.PORT || 7000;
app.listen(PORT,()=>{
     console.log(`connected successfully with ${PORT} port `);
})