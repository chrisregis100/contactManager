/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
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
        required:true
        
    },

}, )

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact