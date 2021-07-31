const express = require("express");
const router = express.Router();

router.get("/testing", (req, res) => {
  res.json({
    message: "success testing",
  });
});

router.post("/testing", (req, res) => {
  res.json({
    message: `successfull testing done by ${req.body.name} !!`,
  });
});

module.exports = router;
