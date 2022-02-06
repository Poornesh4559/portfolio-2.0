const mongoose = require('mongoose')

const Schema = mongoose.Schema

var adminSchema = new Schema({
    name:{type:String, required:true, maxlength:50},
    password:{type:String, required:true}
})

module.exports = mongoose.model('Admin',adminSchema)