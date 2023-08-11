const User = require('../schema/userSchema');

// these controllers are used in route.js

// this is for adding a user in database
const addUserController = async (req, res) => {
  // console.log(req.url);
  const user = req.body;
  const newUser = new User(user); //validating the data we getting from user by comparing it with userSchema we defined

  try {
    await newUser.save(); //save newUser in mongodb
    res.status(201).json(newUser); 
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


// for getting all available users from database
const getUsersController = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// getting a single user data from database
const getSingleUserController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// for updating a specific user
const editUserController = async (req, res) => {
  let user = req.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// this is for deleting a single user
const deleteUserController = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json('User deleted Successfully');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  addUserController,
  getUsersController,
  deleteUserController,
  getSingleUserController,
  editUserController,
};
