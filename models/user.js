// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Creating our User model
var hash_password = function( password ) {
  let salt = bcrypt.genSaltSync(); // enter number of rounds, default: 10
  let hash = bcrypt.hashSync( password, salt );
  return hash;
}
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
UserSchema.methods.comparePassword = function(password) {
  if ( ! this.password ) { return false; }
  return bcrypt.compareSync( password, this.password );
};
UserSchema.pre('save', function(next) {
  // check if password is present and is modified.
  if ( this.password && this.isModified('password') ) {
      this.password = hash_password(this.password);
  }
  next();
});
var User = mongoose.model('User', UserSchema);
module.exports = User;