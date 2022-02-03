const express = require("express");
const auth = require("./auth");
const router = express.Router();

// controller auth
router.post("/rest-api/contact/registrasi",auth.register);

// exports module
module.exports = router;