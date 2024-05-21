const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/job");
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
dotenv.config();

//----------- moongose-----------------------------------
mongoose
.connect("mongodb://localhost:27017/jobApp")
.then(()=>console.log("Connection done"))
.catch((err)=>console.log("Error in connection"+err))

//--------------routes-----------------------------------

app.get('/',(req,res)=>{
    res.send("helelo")
})

app.use(jobRoutes)

app.listen(8080,()=>{
    console.log("Server Started");
})



