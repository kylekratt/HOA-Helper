var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InfractSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    notices: {
        type: Boolean,
        default: false
    }
  },{timestamps: true});

  var Infraction = mongoose.model('Infraction', InfractSchema);
  module.exports = Infraction;