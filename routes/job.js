const express = require("express");
const router = express.Router();

const jobController = require("../controllers/job")


router.post("/api/jobs",jobController.createJobs);

router.get("/api/jobs",jobController.listJobs);

router.put("/api/jobs/:id",jobController.editJobs);

router.delete("/api/jobs/:id",jobController.deleteJobs);

module.exports = router;