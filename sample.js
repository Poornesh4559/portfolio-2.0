const mongoose = require('mongoose')
require('dotenv').config()

var mongoDB = process.env.DB_HOST
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.once('open',()=>{
  console.log('conneted to databse successfully')
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Contacts = require('./models/contact')

Contacts.find().limit(10).sort({date:1}).exec((err,contactinfo)=>{
    if (err) return handleError(err)
    else{
        console.log(contactinfo) 
    }
})