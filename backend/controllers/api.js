const path = require('path');
const Company = require('../models/Company');

exports.getCompanies = async (req, res) => {    // get all companies

}

exports.update = async (req, res) => {  // update company details

}

exports.create = async (req, res) => {  // create new company
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}