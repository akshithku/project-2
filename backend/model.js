const mongoose = require("mongoose");

const UserSchema= mongoose.Schema({
    Pro_Name:{
        type:String
    },
    Pro_img:{
        type:String
    },
    price:{
        type:String
    },
    Quantity:{
        type:Number
    },
    

})

const Model=mongoose.model("Model",UserSchema);
 
module.exports=Model;