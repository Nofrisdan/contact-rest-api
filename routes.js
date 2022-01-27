'use strict';

module.exports = function(app){
    const controller = require("./controller/controller");


    app.route("/").get(controller.index);

    app.route("/tes").get(controller.error);
}