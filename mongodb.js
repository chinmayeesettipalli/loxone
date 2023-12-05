const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/server")
const AddressSchema = new mongoose.Schema({
    MiniserverAddress:{
        type: Integer,
        required:true,
    },
    
     LightingControllerId:{
        type:Integer,
        required:true,
     },

})
const collection =new mongoose.model("Id,AddressSchema");
module.exports=collection;