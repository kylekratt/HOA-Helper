var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InfractSchema = new Schema({
    description: {
        type: string,
        require: true
    },
    notices: {
        type: Boolean,
        default: false
    }
  },{timestamps: true});