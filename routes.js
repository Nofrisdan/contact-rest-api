'use strict';

module.exports = function(app){
    const controller = require("./controller/controller");
    
    app.route("/").get(controller.index);
    app.route("/rest-api").get(controller.nama);
    app.route("/tes").get(controller.error);
}