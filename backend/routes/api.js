const express = require('express');
const router = express.Router();
const {
    create
} = require('../controllers/api');

router.route('/create').post(create);

module.exports = router;