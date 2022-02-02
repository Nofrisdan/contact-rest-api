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
const routes = require("./routes");
routes(app);

// configuration
app.listen(port,() => {
    console.log(`Listen on http://localhost:${port}`)
})
