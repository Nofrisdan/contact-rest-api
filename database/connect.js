
const mongoose = require("mongoose");

// connect
const url = 'mongodb://127.0.0.1:27017/rest-api-contact-app';
mongoose.connect(url)
        .catch(e => console.log(e));