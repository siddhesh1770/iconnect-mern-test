const Company = require("../models/Company");
const CompanyEmail = require("../models/CompanyEmail");


exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({});
    if (companies.length === 0) {
      res.status(400).json({ success: false, message: "No companies found" });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Companies fetched successfully",
      data: companies,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.update = async (req, res) => {
  // update company details
  const data = req.body;
  try {
    // find company by id
    const company = await Company.findById(data._id);
    if (!company) {
      res
        .status(400)
        .json({ success: false, message: "Company  not found new" });
      return;
    }
    company.name = data.name;
    company.description = data.description;
    company.phone = data.phone;
    company.email = data.email;
    company.state = data.state;
    company.city = data.city;
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
      state: req.body.state,
      city: req.body.city,
    };
    const t = {
      id: "62b2af2476d3afcac25a1b4e",
    };
    const temp1 = await Company.findById(t.id);
    const i = temp1.count + 1;
    temp1.count = i;
    await temp1.save();
    data.serial = i;
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

exports.getCompanyById = async (req, res) => {
  // get company details by id
  try {
    const company = await Company.findById(req.body.id);
    if (!company) {
      res.status(400).json({ success: false, message: "Company not found" });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Company fetched successfully",
      data: company,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.allCompaniesEmails = async (req, res) => {
  try {
    const companyEmail = await CompanyEmail.find()
    res.status(200).json({
      companyEmail
    })
  } catch (error) {
    console.log(error)
  }
}
