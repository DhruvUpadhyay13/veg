const express = require('express');
const router = express.Router();

const dashboardController = require('../controller/controller')

// router.post('/createevent',registeruser.newevent)
// router.post('/uploaddata',registeruser.uploadsheet)
// router.get('/getevent',registeruser.getevent)
router.post('/registeruser', dashboardController.registerUser)
router.get('/login', dashboardController.login)
router.post('/createcampaign', dashboardController.createCampaign)
router.get('/getcampaign', dashboardController.getCampaign)
router.get('/editcampaign', dashboardController.editCampaign)
router.post('/findinfluencer', dashboardController.findInfluencer)
router.get('/influencerdetails', dashboardController.influencerDetails)
router.get('/paymentdetails', dashboardController.paymentDetails)
router.get('/brandprofile', dashboardController.brandProfile)
router.get('/getdata', dashboardController.getdata)

module.exports = router;