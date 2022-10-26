const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Courses = new Schema({
    name:{type:String,maxLength:255},
    title: {type:String,maxLength:255},
    body: {type:String,maxLength:255},
    date: Date,
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date,default:Date.now}
  });

  module.exports=mongoose.model('courses', Courses)