const mongoose = require('mongoose');


const blogSpotUserSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true

    },
    lastname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },  
    phone:{
        type:String,
        required:true

    }, 
    password:{
        type:String,
        required:true

    },
})

// module.exports = mongoose.model('cryptoUserModel',userSchema,'CryptoUsers');
const BlogSpotUser = mongoose.model('BlogSpotUser',blogSpotUserSchema);
module.exports = BlogSpotUser ;