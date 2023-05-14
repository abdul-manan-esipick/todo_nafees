const express = require('express');
const router = express.Router();

router.use('/api/task', require('../api/task/route'))

module.exports = router;