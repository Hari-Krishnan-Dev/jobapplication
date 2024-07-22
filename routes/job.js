const express =require('express');
const router = express.Router();
const jobscontroller = require('../controller/jobs')

router.post('/jobs',jobscontroller.createjobs)
router.get('/jobs',jobscontroller.listjobs)
router.put('/jobs/:id',jobscontroller.updatejobs)
router.delete('/jobs/:id',jobscontroller.deletejobs)


module.exports = router ; 
