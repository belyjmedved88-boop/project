const express = require('express');
const router = express.Router();

const {
  renderRequestForm,
  submitRequest,
} = require('../controllers/requestController');

router.get('/request', renderRequestForm);
router.post('/request', submitRequest);

module.exports = router;
