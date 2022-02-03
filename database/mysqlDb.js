'use strict';

const mysql = require("mysql");
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'nofrisdan',
    password : 'N03D0600',
    database : 'node_api_contact'
})

connection.connect(error => error ? console.log(error) : console.log("database connect"));

module.exports = connection;