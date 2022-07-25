const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    "email" : {
        type: String
    }
})

const CompanyEmail = mongoose.model('Company', CompanySchema);
module.exports = CompanyEmail;