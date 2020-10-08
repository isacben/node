const { Router } = require('express');
const pageController = require('../controllers/pageController');

const router = Router();

router.post('/create', pageController.create_post);
router.post('/update', pageController.update_post);
router.get('/page/_id', pageController.page_get);

module.exports = router;