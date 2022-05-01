const express = require("express");
const UserRouter = express.Router();

const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/UserController");

UserRouter.route("/").get(getAllUsers).post(createUser);
UserRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = UserRouter;
