'use strict';

module.exports = function(app){
    const controller = require("./controller/controller");
    
    app.route("/").get(controller.index);
    app.route("/Contact/all").get(controller.alldata);
    app.route("/Contact/:nama").get(controller.getData);

}