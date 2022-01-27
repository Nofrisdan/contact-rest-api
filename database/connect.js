const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:2701/rest-api-contact-app";

mongoose.connect(url)
    .catch((err) => console.log(err));
    