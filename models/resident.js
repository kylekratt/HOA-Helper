var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ResidentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone1: {
        type: String,
        required: false
    },
    phone2: {
        type: String,
        required: false
    },
    HOname: {
        type: String,
        required: false,
    },
    HOemail: {
        type: String,
        required: false,
    },
    HOaddress: {
        type: String,
        required: false,
    },
    HOphone1: {
        type: String,
        required: false
    },
    HOphone2: {
        type: String,
        required: false
    }
  
  });
  var Resident = mongoose.model('Resident', ResidentSchema);
  module.exports = Resident;