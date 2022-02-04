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

exports.bad = function(req,res){
    const data = {
        'status':400,
        'values' : 'Bad Request'
    }

    res.json(data);
    res.end();
}