const mongoose = require('mongoose')

const Schema = mongoose.Schema

var contactSchema = new Schema({
    name:{type:String, required:true,minlength:5,maxlength:50},
    email:{type:String, required: true},
    company:{type:String, maxlength:100},
    phone:{type:Number,minlength:10, maxlength:13},
    message:{type:String , maxlength:300, required:true},
    date:{type:Date, default:Date.now()}
})

module.exports = mongoose.model('Contacts',contactSchema)