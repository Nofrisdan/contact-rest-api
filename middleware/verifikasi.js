// verifikasi akun
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

module.exports = function(req,res,next){

    // mengambil token header
    const getToken = req.headers.authorization;

    // jika get token berisi maka lakukan verifikasi token
    if(getToken){
        // verifikasi tokennya
        const token = getToken.split(' ')[1];

        jwt.verify(token,secret.secret,(error, decode) => {
            if(error){
                return res.status(401).send({auth : false, message : "Token Tidak terdaftar"});
            }else{

                // set req auth
                req.auth = decode;

                next();

            }
        })
    }else{
        return res.status(401).send({auth : false, message : "Token Tidak tersedia"});
    }
}