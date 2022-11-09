const userController = require('../app/controllers/UserController');
const express = require('express');
const router = express.Router();

router.get('/', userController.index);

module.exports = router;
