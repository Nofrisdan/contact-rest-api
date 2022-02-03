'use strict';


exports.ok = function(values,res){
    const data = {
        'status' : 200,
        'values' : values
    }


    res.json(data);
    res.end();
}

exports.error = function(values,res){
    const data = {
        'status' : 404,
        'values' : values
    }

    res.json(data);
    res.end();
}

exports.tes = function(params,res){
    const data = {
        'status' : params.status,
        'author' : params.nama,
        'msg' : params.msg,
        'license' : params.license
    }

    res.json(params);
    res.end();
}