import React, { useState, useEffect } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from '@mui/material';

import { editUser, getUser } from '../service/api';

import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
`;

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    // console.log(response);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user, id); //sending data to backend
    navigate('/all');
  };

  // console.log(user);
  return (
    <Container>
      <Typography variant='h4'>Edit User</Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name='username'
          value={username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
      </FormControl>
      <FormControl>
        <Button
          variant='contained'
          color='primary'
          onClick={() => editUserDetails()}
        >
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
