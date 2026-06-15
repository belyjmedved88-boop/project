const express = require('express');
const router = express.Router();

const { renderRequests } = require('../controllers/adminController');

router.get('/requests', renderRequests);

module.exports = router;
