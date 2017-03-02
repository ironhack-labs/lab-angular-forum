const express = require('express');
const router  = express.Router();

const authRoutes = require('./authentication.controller');
const thrRoutes  = require('./threads.controller');

router.use('/', authRoutes);
router.use('/threads', thrRoutes);

module.exports = router;
