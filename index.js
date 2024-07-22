const express =require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const jobroute =require('./route/jobs')
app.use(express.json());

//mongodb connection
mongoose
.connect(process.env.STRING)
.then(()=>{
    console.log("mangodb was established success");
})
.catch((err)=>{
    console.log(err,"is occured ");
})

app.use('/app',jobroute);


app.listen(process.env.PORT,()=>{
    console.log(
        `server connected in ${process.env.PORT}`
    )
})




