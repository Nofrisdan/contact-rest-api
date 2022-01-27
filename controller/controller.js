'use strict';

// database
require("../database/connect");
const Contact = require("../model/Kontak_m");
const response = require("../res/res");


// controler
exports.index = function(req,res){
    response.ok("Rest Api Berhasil Berjalan ",res);
}

exports.error = function(req,res){
    response.error("Your Request is broken",res);
}