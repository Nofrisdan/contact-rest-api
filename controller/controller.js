'use strict';

// database
require("../database/connect");
const {Contact} = require("../model/Kontak_m");
const response = require("../res/res");


// controler
exports.index = async function(req,res){
    const value = await Contact.find();
    response.ok(value,res);
}


exports.nama = async function(req,res){
    const value = await Contact.find({nama : req.query.nama});

    if(value.length != 0){
        response.ok(value,res);
    }else{
        response.error("Your Request Not Defined",res);
    }  
}

exports.error = function(req,res){
    response.error("Your Request is broken",res);
}