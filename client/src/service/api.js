import axios from 'axios';
// const URL = 'http://localhost:5009';
const URL = '';
// here we created api's then use where it needed to be called and setup it's route and action(controlers) in backend route.js
export const addUser = async (data) => {
  // first this api is created then used in AddUser.jsx
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log('error occured while calling addUserApi', error);
  }
};

export const getUsers = async () => {
  //getting all users data, first this api is created then used in AllUsers.jsx,
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log('error occured while calling getUsers Api', error);
  }
};

// getting single user info, it is used in edituser
export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log('error occured while calling getUser ', error);
  }
};

// updating existing user
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log('error occured while calling editUser ', error);
  }
};
// deleting specific user
export const deleteUserApi = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log('error occured while calling deleteUserApi', error);
  }
};

