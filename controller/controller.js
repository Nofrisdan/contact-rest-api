'use strict';

// database
require("../database/connect");
const {Contact,Auth} = require("../model/Kontak_m");
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
        response.ok("Data Is Empty",res);
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


// mengubah data berdasarkan nama mahasiswa

exports.updateData = async function(req,res){
    const data = {
        nama : req.body.nama,
        nohp : req.body.nohp,
        email : req.body.email
    }

    const id = req.body.id;

    const update = await Contact.updateMany({_id : id},data);

    if(update){
        response.ok("Data Berhasil Dirubah ",res);
    }else{
        response.error("Data Gagal Dirubah ",res);
    }

}

// Menghapus data kontak
exports.deleteData = async function(req,res){

    const id = req.body.id;

    const del = await Contact.deleteMany({_id : id});

    if(del){
        response.ok("Data Behasil Dihapus",res);
    }else{
        response.error("Data Tidak Berhasil dihapus",res);
    }
}

