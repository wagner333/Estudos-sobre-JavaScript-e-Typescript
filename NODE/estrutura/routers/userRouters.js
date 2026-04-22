const UsersController = require("../controllers/userControllers");

module.exports = (app) => {
  app.post("/users", UsersController.createUser);
  app.get("/users", UsersController.getUsers);
};
