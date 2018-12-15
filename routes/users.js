const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  getAllPetsForAUser,
  updateUser,
  deleteUser,
  createUser,
  updateUserFeature
} = require("../db/queries/usersQueries.js");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.get("/:id/pets", getAllPetsForAUser);
router.put("/:id", updateUser);
router.patch("/:id", updateUserFeature);
router.delete("/:id", deleteUser);
router.post("/", createUser);
module.exports = router;
