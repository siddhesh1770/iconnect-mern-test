const Company = require('../models/Company');

exports.getCompanies = async (req, res) => {    // get all companies

}

exports.update = async (req, res) => {  // update company details

}

exports.create = async (req, res) => {  // create new company
    try {
        const data = {
            name: req.body.name,
            description: req.body.description,
            phone: req.body.phone,
            email: req.body.email,
            address: {
                state: req.body.state,
                city: req.body.city
            }
        };
        const company = await Company.create(data);
        res.status(200).json({
            success: true,
            message: 'Company created successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}