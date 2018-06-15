var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var creatorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  }
});

creatorSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
creatorSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const Creator = mongoose.model("Creator", creatorSchema);
module.exports = Creator;
