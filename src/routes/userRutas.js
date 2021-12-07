const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.use(express.static('public'));
router.get('/login', userController.login)
router.get('/register', userController.register)

module.exports = router;