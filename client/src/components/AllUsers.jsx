import React, { useState, useEffect } from 'react';
import { deleteUserApi, getUsers } from '../service/api';

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from '@mui/material';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 50px;
`;

const TRow = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRowz = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = async (id) => {
    await deleteUserApi(id);
    getAllUsers();
  };
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <TRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TRow>
      </TableHead>
      <TableBody>
        {users.map((user, index) => {
          return (
            <TRowz key={user._id}>
              <TableCell>{index + 1}</TableCell>
              {/* change it to user.id to use JSON Server */}
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                {user._id === '64d502ea6a8d1f4c02e8599a' ? (
                  <Button
                    color='primary'
                    variant='contained'
                    style={{ marginRight: 10 }}
                    disabled
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    color='primary'
                    variant='contained'
                    style={{ marginRight: 10 }}
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    Edit
                  </Button>
                )}
                {/*  */}
                {user._id === '64d502ea6a8d1f4c02e8599a' ? (
                  <Button
                    color='primary'
                    variant='contained'
                    style={{ marginRight: 10 }}
                    disabled
                  >
                    Delete
                  </Button>
                ) : (
                  <Button
                    color='secondary'
                    variant='contained'
                    onClick={
                      user._id === '64d502ea6a8d1f4c02e8599a'
                        ? 'disabled'
                        : () => deleteUser(user._id)
                    }
                  >
                    Delete
                  </Button>
                )}
                {/*  */}
              </TableCell>
            </TRowz>
          );
        })}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
