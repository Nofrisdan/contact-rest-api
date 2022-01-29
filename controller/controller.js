'use strict';

// database
require("../database/connect");
const {Contact} = require("../model/Kontak_m");
const response = require("../res/res");


// controler

// running rest-api
exports.index = async function(req,res){
    response.ok("Rest Api Running",res);
  }
  

// menampilkan semua data berdasarkan nama

exports.alldata = async function(req,res){
    const data = await Contact.find();

    if(data.length != 0){
        response.ok(data,res);
    }else{
        response.error("Your Request Is Broken",res);
    }
}


// menampilkan data berdasarkan nama
exports.getData = async function(req,res){
    const data = await Contact.find({nama : req.query.nama});

    if(data.length != 0){
        response.ok(data,res);
    }else{
        response.error("Your Request Is Broken",res);
    }
}


// menambahkan data contact
exports.addData = async function(req,res){
    const data = {
        nama : req.body.nama,
        nohp : req.body.nohp,
        email : req.body.email
    }

    const insert = await Contact.insertMany(data);

    if(insert){
        response.ok("Data Berhasil Ditambahkan",res);
    }else{
        response.error("Insertin data Failed",res);
    }

    
}

