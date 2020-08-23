const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const authController = require('../controllers/authController');

/* GET home page. */
router.get('/', appController.head, appController.root );

/* Service page */
router.get('/service', appController.head, appController.service );

/* About Page

* Post request */
router.post('/about', appController.head, appController.about );

/* Register route */
router.post('/register', authController.register);

module.exports = router;
