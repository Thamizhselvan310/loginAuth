const mongoose = require('mongoose');

var loginid = mongoose.model('loginuser',{

    name: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    contact:{
        type:Number
    },
    email:{
        type:String
    }
});

module.exports = {loginid}