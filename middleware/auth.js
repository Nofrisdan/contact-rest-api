// koneksi
const db = require("../database/mysqlDb");
const mysql = require("mysql");
// md5
const md5 = require("md5");
const response = require("../res/res");
const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const ip = require("ip");


// {controller
exports.register = function(req,res){
   const data =  {
        nama_user : req.body.username,
        email : req.body.email,
        wa : req.body.wa,
        password : md5(req.body.password)
   }

   const query1 = "SELECT email FROM ?? WHERE ?? = ?";
   const param = ["tb_user","email",data.email];

   const sql = mysql.format(query1,param);

   db.query(sql,(err,result) => {
       if(err){
           console.log(err);
       }else{
           if(result.length == 0){
            //    insert ke database
            const query2 = "INSERT INTO ?? SET ?"
            const param2 = ['tb_user',data];

            const sql2 = mysql.format(query2,param2);

            db.query(sql2,(err,result) => {
                if(err){
                    console.log(err)
                }else{
                    response.ok("Akun Anda Berhasil terdaftar",res);
                }
            })
           }else{
               response.error("Email Anda Sudah Terdaftar",res);
           }
       }
   })

}


exports.tes = function(req,res){
    const data = {
        nama_user : req.body.username,
        email : req.body.email,
        wa : req.body.wa,
        password : md5(req.body.password)
    }

    response.ok(data,res);

}