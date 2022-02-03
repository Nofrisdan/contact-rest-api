const mongoose = require("mongoose");

// database
const Contact = mongoose.model("Contact", {
    nama: {
        type: String,
        required: true
    },
    nohp: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password : {
        type : String,
        required : true
    }
})

const Auth = mongoose.model("Auth",{
    user_id : {
        type : String,
        required : true
    },
    token : {
        type:String,
        required : true
    },
    ip_addres : {
        type : String,
        required : true
    }
})


module.exports = {
    Contact,
    Auth
};