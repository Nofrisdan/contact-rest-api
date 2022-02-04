const express = require("express");
const auth = require("./auth");
const router = express.Router();

// controller auth
router.post("/rest-api/contact/registrasi",auth.register);
router.post("/rest-api/contact/generate",auth.login);
router.post("/rest-api/contact/tes",auth.tes);


// exports module
module.exports = router;