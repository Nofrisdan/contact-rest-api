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

   const query = "SELECT email FROM ?? WHERE ??";
   const param = ["tb_user","email",data.email];

   query = mysql.format(query,param);

   db.query(query,(err,result) => {
       if(err){
           console.log(err);
       }else{
           if(result.length == 0){
            //    insert ke database
            const query = "INSERT INTO ?? SET ??"
            const param = ['tb_user',data];

            query = mysql.param(query,param);

            db.query(query,(err,result) => {
                if(err){
                    console.log(err)
                }else{
                    response.ok("Berhasil Menambahkan Data anda",res);
                }
            })
           }else{
               response.error("Email Anda Sudah Terdaftar",res);
           }
       }
   })

}