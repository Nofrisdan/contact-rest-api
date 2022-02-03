'use strict';

// database and respon
const db = require("../database/mysqlDb");
const response = require("../res/res");

exports.index = (req,res) => {
   const param = db.query("SELECT nama_user,email,wa FROM tb_user",(err,result,fields)=> {
       if(err) throw err;

       response.ok(result,res);
   })

}

exports.getJoin = (req,res) => {

    const param = db.query("SELECT nama_user,email,wa,token FROM tb_user INNER JOIN tb_akses ON tb_user.id_user=tb_akses.id_user",(err,result,fields) => {
        if(err) throw err;
        response.ok(result,res);
    })
}