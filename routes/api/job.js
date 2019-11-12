const express = require('express');
const router = express.Router();

// @route   GET api/job
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Job route'));

module.exports = router;
