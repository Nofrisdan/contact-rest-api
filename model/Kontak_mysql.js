'use strict';

const db = require("../database/mysqlDb");

// tb_user
exports.tb_user_findAll = function(){
    
   const findAll =  db.query("SELECT * FROM tb_user",(err,result,fields) => {
            if(err) throw err;

            return result;
        })

    return findAll;
}
