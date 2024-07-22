const mongoose = require('mongoose')
const jobschema = mongoose.Schema({
    title :{
        type :String,
        required : true
    },
    company : {
        type :String,
        required : true
    },
    description : {
        type :String,
        required : true
    },  
    location :{
        type :String,
        required : true
    },
    salary :{
        type :Number,
        required : true
    },
    experience : {
        type :String,
        required : true
    }

})


const jobmodel = mongoose.model('jobs',jobschema)
module.exports = jobmodel;
