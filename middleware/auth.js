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
           response.bad(err,res);
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


exports.login = function(req,res){
    const post = {
        password : req.body.password,
        email : req.body.email
    }

    // cek email dan password
    const sql = "SELECT id_user,nama_user,email,wa FROM tb_user WHERE ??=? AND ??=?";
    const param = ['email',post.email,'password',md5(post.password)];

    db.query(mysql.format(sql,param),(err,result) => {
        if(err){
            response.error(err,res);
        }else{
            // cek apakah data tersedia
            if(result.length > 0){

                // cek apakah id_user sudah memiliki token

                // generate token jwt
                const token = jwt.sign({result},config.secret,{
                    expiresIn : 1440
                })


                const id_user = result[0].id_user;

                // cek apakah id_user tersedia di tb_akses
                db.query("SELECT token FROM ?? WHERE ??=?",['tb_akses','id_user',id_user],(err,result)=>{
                    if(result.length == 0){ //data kosong


                        const data = {
                            id_user : id_user,
                            token : token,
                            ip_addres : ip.address()
                        }

                        // insert to tb_akses
                        const sql2 = "INSERT INTO ?? SET ?";
                        const param2 = ['tb_akses',data];

                        db.query(mysql.format(sql2,param2),(err,result) => {
                            if(err){
                                // response.bad(res);
                                response.error(err,res);
                            }else{
                                res.json({
                                    'success' : true,
                                    'message' : "Generate Token Success",
                                    token,
                                    'currUser' : data.id_user
                                })

                                res.end();

                            }
                        })
                    }else{ //data terisi

                        res.json({
                            'success' : true,
                            'message' : "Token Generate",
                            'token' : result[0].token
                        })

                        res.end();
                    }
                })
               
            }else{
                // response.error("Acces",res);
                res.json({
                    'error' : true,
                    'message' : 'Access Forbidden'
                })

                res.end();
            }
            
        }
    })
}


exports.verifikasi = function(req,res){
    res.json({
        status : 200,
        values : "Halaman ini membutuhkan verifikasi"
    });

    res.end();
}

exports.tes = function(req,res){

    // const post = {
    //     email : req.body.email,
    //     password : req.body.password
    // }

    // row query ?? = variabel
    // row query ? = parameter

    const sql = "SELECT ?? FROM ?? WHERE ??=(SELECT ?? FROM ?? WHERE ??=?)";
    const param = ["id_user","tb_user","id_user","id_user","tb_akses","token",req.query.token]
    
    db.query(mysql.format(sql,param),(err,result) => {

        if(err) {
            res.json({
                value : err
            })

            res.end()
        }else{
            res.json({
                result
            })
     
            res.end();
        }
      
    })
}