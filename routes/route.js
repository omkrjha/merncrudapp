// it is backend part where we setup actions/response for each route which then be used in frontend api.js
const express = require('express');

const router = express.Router();
const {
  addUserController,
  getUsersController,
  getSingleUserController,
  editUserController,
  deleteUserController,
} = require('../controller/userController');


router.post('/add', addUserController);
router.get('/all', getUsersController);
router.get('/:id', getSingleUserController);
router.put("/:id",editUserController)
router.delete('/:id', deleteUserController);

exports.router = router;
