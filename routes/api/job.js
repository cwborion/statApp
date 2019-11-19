const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Job = require('../../models/Job');
const User = require('../../models/User');

// @route   GET api/job
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Job route'));

module.exports = router;
