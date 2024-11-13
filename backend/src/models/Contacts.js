/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    typeOfContact:{
        type:String,
        enum:['amis', "patron", "other", "family", "friend", "colleague", "acquaintance", "business", "customer", "partner", "supplier", "other"],
        required:true
        
    },

}, )

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact