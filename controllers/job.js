const jobModel = require("../model/job");

const createJobs = async (req, res) => {
  try {
    const jobObj = req.body;
    const newJob = new jobModel(jobObj);
    const newlySavedJob = await newJob.save();
    res.json({
      success: true,
      message: "Job added succesful",
      jobId: newlySavedJob._id,
    });
  } catch {
    res.json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const listJobs = async (req, res) => {
  try {

    const jobsList = await jobModel.find();

    res.json({
      success: true,
      message: "List of jobs",
      result: jobsList,
    });
  } catch {
    res.json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const editJobs = async (req, res) => {
  try {
  const id = req.params.id;
  console.log("Edited if-"+id);
  await jobModel.findByIdAndUpdate(id,req.body);
  res.json({
    success: true,
    message: "Dummy edit",
    })
  }
    catch (err) {
    res.json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
};
  }

const deleteJobs = async (req, res) => {
  const jobId = req.params.id;
  await jobModel.findOneAndDelete(jobId);
  res.json({
    success: true,
    message: "Deleted",
  });
};

const jobController = {
  createJobs,
  editJobs,
  listJobs,
  deleteJobs,
};

module.exports = jobController;