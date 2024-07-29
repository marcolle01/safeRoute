const Report = require("../models/Report");

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("user", "username");
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createReport = async (req, res) => {
  const { description, location } = req.body;
  const userId = req.user.id;

  try {
    const report = await Report.create({
      user: userId,
      description,
      location,
    });
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
