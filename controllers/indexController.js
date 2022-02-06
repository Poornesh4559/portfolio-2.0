const mongoose = require('mongoose')
const express = require('express')
var router = express.Router()


const Contacts = require('../models/contact')
const contact = require('../models/contact')

exports.contact = (req,res)=>{
    var username = req.body.name
    var email = req.body.email
    var company = req.body.company 
    var phone = req.body.phone
    var message = req.body.message
    let f = {name:username,email:email,company:company,phone:phone,message:message}
    Contacts.create(f,(err,newContact)=>{
        if (err) throw err
        else{
            res.render('thankYou')
        }
    })

}
