const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = new Schema({
  full_name: {
    type: String,
    default: null,
  },
  team_name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
});

//userSchema.virtual('ID').get(function() { return this._id; });
var User = mongoose.model("UserTeam", userSchema);

module.exports = User;
