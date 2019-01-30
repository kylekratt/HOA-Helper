var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ResidentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone1: {
        type: String
    },
    payment: {
        type: Number
    },
    notices: {
        type: Boolean,
        default: false
    },
    infractions: [{
        type: Schema.Types.ObjectId,
        ref: "Infraction"
    }]
  });
  var Resident = mongoose.model('Resident', ResidentSchema);
  module.exports = Resident;