
const res = require('express/lib/response')
const Admin = require('../models/admin')
const Contacts = require('../models/contact')
require('dotenv').config()



oriPass = process.env.ADMIN_PASSWORD
oriName = process.env.ADMIN_NAME


exports.adminPost = (req,res) =>{
    var name = req.body.name
    var password = req.body.password
    if (name === oriName && password === oriPass){
        Contacts.find().limit(10).sort({date:-1}).exec((err,contactinfo)=>{
            if (err) return handleError(err)
            else{
                res.render('contactinfo',{Contacts:contactinfo}) 
            }
        })
    }
    else{
        res.render('admin',{msg:"password or name is incorrect please check again"})
    }

}


exports.adminGet = (req,res) =>{
    res.render('admin',{msg:""})
}