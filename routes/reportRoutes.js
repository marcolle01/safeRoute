const express = require("express");
const { getReports, createReport } = require("../controllers/reportController");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.route("/").get(getReports).post(protect, createReport);

module.exports = router;
