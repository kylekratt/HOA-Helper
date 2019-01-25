// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Creating our User model
var UserSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true
  },

  residents: [{
    type: Schema.Types.ObjectId,
    ref: "Resident"
  }]
});
// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
var User = mongoose.model('User', UserSchema);
User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
UserSchema.pre('save', function(next) {
  user.password = bcrypt.hashSync(User.password, bcrypt.genSaltSync(10), null);
});
module.exports = User;