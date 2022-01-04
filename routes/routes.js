const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.getMainPage);

router.post('/add', controller.postAdd);

module.exports = router;
