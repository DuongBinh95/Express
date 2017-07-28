/**
 * Created by duong on 7/20/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var student = new Schema({
    name : String,
    address : String,
    phone : String,
    email : String,
    create_date : Schema.Types.Date
});

module.exports = mongoose.model('Student',student);