const userRouter = require("express").Router();
const UserController = require("../controllers/UserController");
const ErrorHandlerMiddleware = require("../middlewares/ErrorHandlerMiddleware");
const ResponseMiddleware = require("../middlewares/ResponseMiddleware");

userRouter.get(
  "/user",
  ErrorHandlerMiddleware(UserController().getDetails),
  ResponseMiddleware
);

module.exports = userRouter;
