const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// get requests
router.get('/', controller.getMainPage);
router.get('/add', controller.getAdd);

// post requests
router.post('/add', controller.postAdd);
router.post('/delete', controller.postDelete);

module.exports = router;
