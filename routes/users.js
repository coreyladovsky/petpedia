const express = require('express');
const router = express.Router();
const { getAllUsers, getSingleUser, getAllPetsForAUser, updateUser, deleteUser, createUser } = require('../db/queries/usersQueries.js');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.get('/:id/pets', getAllPetsForAUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/', createUser)
module.exports = router;
