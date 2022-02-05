// module

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const morgan = require("morgan");

// parser
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// cors
app.use(cors());
app.use(morgan("dev"));

// routes middleware
app.use("/auth",require("./middleware"));


// routes utama
const {routesMysql} = require("./routes");
routesMysql(app);


// configuration
app.listen(port,() => {
    console.log(`Listen on http://localhost:${port}`)
})
