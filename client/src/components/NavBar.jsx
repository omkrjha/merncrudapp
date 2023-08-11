import React from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`
  background: black;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const NavBar = () => {
  return (
    <Box>
      <Header position='static'>
        <Toolbar>
          <Tabs to='/'>CRUD</Tabs>
          <Tabs to='/all'>All users</Tabs>
          <Tabs to='/add'>Add users</Tabs>
        </Toolbar>
      </Header>
    </Box>
  );
};

export default NavBar;
