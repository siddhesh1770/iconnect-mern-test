const Company = require("../models/Company");

exports.getCompanies = async (req, res) => {
  // get all companies
};

exports.update = async (req, res) => {
  // update company details
  const data = req.body;
  try {
    const company = await Company.findOne({ email: data.email });
    if (!company) {
      res.status(400).json({ success: false, message: "Company not found" });
      return;
    }
    company.name = data.name;
    company.description = data.description;
    company.phone = data.phone;
    company.email = data.email;
    company.address.state = data.state;
    company.address.city = data.city;
    await company.save();
    res.status(200).json({
        success: true,
        message: "Company updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.create = async (req, res) => {
  // create new company
  try {
    const data = {
      name: req.body.name,
      description: req.body.description,
      phone: req.body.phone,
      email: req.body.email,
      address: {
        state: req.body.state,
        city: req.body.city,
      },
    };
    const temp = await Company.findOne({ email: data.email });
    if (temp) {
      res.status(400).json({ success: false, message: "Email already exists" });
      return;
    }
    const company = await Company.create(data);
    res.status(200).json({
      success: true,
      message: "Company created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
