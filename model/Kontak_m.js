const mongoose = require("mongoose");

// database
const Contact = mongoose.model("Contact",{
    nama : {
        type : String,
        required : true
    },
    nohp :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})


module.exports = Contact;