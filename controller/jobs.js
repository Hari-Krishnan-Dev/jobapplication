const express =require('express');
const jobmodel = require('../model/jobs')


const createjobs  =async (req,res)=>{
const jobsentry = req.body;
const newjob = new jobmodel(jobsentry);
const jobinfo = await newjob.save();
console.log(newjob);
res.json({
    message : " new job has created successfully",
    "ID" : jobinfo._id
})
}
const listjobs = async (req,res)=>{
const {minsalary,maxsalary} = req.query;
const listofjobs = await jobmodel.find({
    $and : [
        {salary :{$gte : minsalary}},
       {salary :{$lte : maxsalary} }
    ]
})
res.json({
    success : true,
    message:"list of jobs",
    results:listofjobs
}
)
}
const updatejobs =async(req,res)=>{
    const jobid = req.params.id;
    console.log(jobid);
    try {
        await jobmodel.findByIdAndUpdate(jobid,req.body)
        res.json({
            success :true,
            id : jobid,
            message :"the data has successfully updated"
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }


}
const deletejobs = async (req, res) => {
    try {
        const findjob = req.params.id;
        await jobmodel.findByIdAndDelete(findjob);
        res.json({
            id: findjob,
            message: 'Job has been deleted'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting job', error });
    }
};

const jobscontroller = {
    createjobs,
    listjobs,
    updatejobs,
    deletejobs
}
module.exports = jobscontroller;


