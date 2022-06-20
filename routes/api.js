const express = require('express');
const router = express.Router();
const {
    create,
    update,
    getCompanies
} = require('../controllers/api');

router.route('/create').post(create);
router.route('/update').post(update);
router.route('/getCompanies').get(getCompanies);

module.exports = router;