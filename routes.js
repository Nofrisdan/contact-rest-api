'use strict';

// database mongodb
const routesMongo = function(app){
    const controller = require("./controller/mongoDb");
    
    app.route("/").get(controller.index);
    app.route("/Contact/all").get(controller.alldata);
    app.route("/Contact/get").get(controller.getData);
    app.route("/Contact/add").post(controller.addData);
    app.route("/Contact/edit").put(controller.updateData);
    app.route("/Contact/delete").delete(controller.deleteData);
}

// database mysql
const routesMysql = function(app){
    const controller = require("./controller/mysql");
    app.route("/rest-api/contact").get(controller.index);




    // 404 notfound
    app.use("/",(req,res) => {
        res.status(404).json({
            status : 404,
            value : "Your Request Is Broken"
        });

        res.end();
    })

}


module.exports = {
    routesMongo,
    routesMysql
}