const UserService = require("../services/UserService");
const mongoose = require("mongoose");

module.exports = () => {
  const getDetails = async (req, res, next) => {
    let user = await UserService().fetch();
    req.msg = "user_details";
    req.rData = { user };

    next();
  };

  return {
    getDetails,
  };
};
