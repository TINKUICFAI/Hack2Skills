const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = new Schema({
  full_name: {
    type: String,
    default: null,
  },
  number: {
    type: Number,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
});

//userSchema.virtual('ID').get(function() { return this._id; });
var User = mongoose.model("User", userSchema);

module.exports = User;
