const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Company name is required'],
    },
    description: {
        type: String,
        required: [true, 'Company description is required'],
    },
    phone: {
        type: String,
        required: [true, 'Company phone is required'],
    },
    email: {
        type: String,
        required: [true, 'Company email is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
});

const Company = mongoose.model('Company', CompanySchema);
module.exports = Company;