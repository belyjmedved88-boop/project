const express = require('express');
const router = express.Router();

const {
  renderHome,
  renderAbout,
  renderCatalog,
  renderContacts,
} = require('../controllers/pageController');

router.get('/', renderHome);
router.get('/about', renderAbout);
router.get('/catalog', renderCatalog);
router.get('/contacts', renderContacts);

module.exports = router;
