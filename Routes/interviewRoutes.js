// backend/routes/interviewRoutes.js
const express = require('express');
const router = express.Router();
const {
    runFaceDetection,
    runVoiceAnalysis,
    generateQuestion
} = require('../controllers/interviewController');

router.get('/face', runFaceDetection);
router.get('/voice', runVoiceAnalysis);
router.post('/question', generateQuestion);

module.exports = router;
