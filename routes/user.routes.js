const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// Routes for CRUD operations
router.post('/users', userController.createUser); // Create
router.get('/users', userController.getUsers); // Read all
router.get('/users/:id', userController.getUserById); // Read one

router.put('/users/:id', userController.updateUser); // Update
router.delete('/users/:id', userController.deleteUser); // Delete

module.exports = router;
