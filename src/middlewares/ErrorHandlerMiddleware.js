const current_time = new Date().toString().slice(16, 24);
const { models } = require("../models");
const ResponseMiddleware = require("./ResponseMiddleware");

module.exports = (handler) => {
  return async (req, res, next) => {
    //const transaction = await models.sequelize.transaction();
    try {
      await handler(req, res, next);
      //await transaction.commit();
    } catch (ex) {
      console.log(handler);
      let name = handler.name;

      //await transaction.rollback();
      req.rCode = 0;
      let message = `Something went wrong -> ${ex.message}`;

      ResponseMiddleware(req, res, next, message);
    }
  };
};
