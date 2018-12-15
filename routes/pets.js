const express = require("express");
const router = express.Router();
const {
  getAllPets,
  getSinglePet,
  createPet,
  updatePet,
  deletePet,
  updatePetFeature
} = require("../db/queries/petsQueries.js");

router.get("/", getAllPets);
router.get("/:id", getSinglePet);
router.post("/", createPet);
router.put("/:id", updatePet);
router.patch("/:id", updatePetFeature);
router.delete("/:id", deletePet);

module.exports = router;
