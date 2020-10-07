const { Router } = require('express');
const pageController = require('../controllers/pageController');

const router = Router();

router.post('/create', pageController.create_post);

module.exports = router;