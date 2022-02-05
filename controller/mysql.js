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
        if(err){
            console.log(err);
            response.error(err,res);
        }else{
            
            response.ok(result,res);
        }
        
    })
}

// delete akun 
exports.delAkun = (req,res) => {
   const token = req.body.token
    const sql = "DELETE FROM ?? WHERE ??=(SELECT ?? FROM ?? WHERE ??=?)";
    const param = ["tb_user","id_user","id_user","tb_akses","token",token];

    db.query(sql,param,(err,result)=>{
        if(err){
            response.error(err,res);
        }else{
            response.ok("Akun Berhasil Dihapus",res);
        }
    })
}