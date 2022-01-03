const express = require('express');
const router = express.Router();

router.get('/');

router.post('/add', (req, res) => {
   console.log(req.body);
   res.redirect('/');
});

module.exports = router;
