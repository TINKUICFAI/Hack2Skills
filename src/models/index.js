const mongoose = require("mongoose");
const url = "mongodb://localhost/hacks";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const con = mongoose.connection;
mongoose.set("debug", true);
con.on("open", () => {
  console.log("connected to database");
});

module.exports = con;
