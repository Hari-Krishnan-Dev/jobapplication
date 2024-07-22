const express = require("express");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/job");
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
dotenv.config();

//----------- moongose-----------------------------------
mongoose
.connect(process.env.STRING)
.then(()=>console.log("Connection done"))
.catch((err)=>console.log("Error in connection"+err))

//--------------routes-----------------------------------


app.use('/app',jobRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server Started ${process.env.PORT}`);
})



