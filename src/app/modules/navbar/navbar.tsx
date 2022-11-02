import { AppBar, Button, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useUserAuth } from '../auth/userAuthContext';

export const Navbar = () => {
  const { logOut } = useUserAuth();

  const handleLogout = async () => {
    await logOut();
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Sawera
        </Typography>
        <Button
          id='positioned-button'
          variant='contained'
          disableElevation
          aria-controls={open ? 'positioned-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Options
        </Button>
        <Menu
          id='positioned-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Help</MenuItem>
          <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
