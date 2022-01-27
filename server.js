// module
const express = require("express");
const app = express();
const port = 3000;

// parser
app.use(express.urlencoded({extended : true}));
app.use(express.json());


// configuration
app.listen(port,() => {
    console.log(`Listen on http://localhost:${port}`)
})
