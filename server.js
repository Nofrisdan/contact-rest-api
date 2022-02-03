// module

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
// parser
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// cors
app.use(cors());

// routes
const {routesMysql} = require("./routes");
routesMysql(app);



// configuration
app.listen(port,() => {
    console.log(`Listen on http://localhost:${port}`)
})
