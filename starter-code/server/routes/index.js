const express = require('express');
const router  = express.Router();

const apiRoutes = require('./api/index.controller');

router.use('/api', apiRoutes);

module.exports = router;
