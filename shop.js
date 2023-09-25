const path = require('path');

const express = require('express');

const RootDir= require('../util/path')

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(RootDir, 'views', 'shop.html'));
});

module.exports = router;
