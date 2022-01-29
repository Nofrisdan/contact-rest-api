'use strict';

module.exports = function(app){
    const controller = require("./controller/controller");
    
    app.route("/").get(controller.index);
    app.route("/Contact/all").get(controller.alldata);
    app.route("/Contact/get").get(controller.getData);
    app.route("/Contact/add").post(controller.addData);
}