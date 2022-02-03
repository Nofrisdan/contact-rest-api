'use strict';

// database and respon
require("../database/mysqlDb");
const kontak_model = require("../model/Kontak_mysql");
const response = require("../res/res");

exports.index = (req,res) => {
    response.ok("Connecting ResTfull-API connecting ",res);
}