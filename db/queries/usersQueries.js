const { db } = require("./index.js");

const getAllUsers = (req, res, next) => {
  db
    .any("SELECT * FROM users")
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Received all USERS"
      });
    })
    .catch(err => next(err));
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db
    .one("SELECT * FROM users WHERE id=$1", userId)
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Received ONE USER!"
      });
    })
    .catch(err => next(err));
};

const getAllPetsForAUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db
    .any(
      "SELECT pets.* FROM users JOIN pets ON pets.owner_id = users.id WHERE users.id =$1",
      [userId]
    )
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "ALL USER PETS!!!!"
      });
    })
    .catch(err => next(err));
};

const updateUser = (req, res, next) => {
  db
    .none(
      "UPDATE users SET username=${username}, email=${email} WHERE id=${id}",
      {
        username: req.body.username,
        email: req.body.email,
        id: parseInt(req.params.id)
      }
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Updated a USER!"
      });
    })
    .catch(err => next(err));
};

const updateUserFeature = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ")
  db
    .none(
      "UPDATE users SET " + queryString + " WHERE id=" + req.params.id, req.body
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Updated a USER!"
      });
    })
    .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db
    .result("DELETE FROM users WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Removed politely a user",
        result: result
      });
    })
    .catch(err => next(err));
};

const createUser = (req, res, next) => {
  db
    .none(
      "INSERT INTO users(username, email) VALUES(${username}, ${email})",
      req.body
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "congrats new user "
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllUsers,
  getSingleUser,
  getAllPetsForAUser,
  updateUser,
  deleteUser,
  createUser,
  updateUserFeature
};
