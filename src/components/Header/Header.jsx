import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function DrawerAppBar() {
  return (
    <>
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar   style={{backgroundColor:"rgba(255, 204, 38, 1)",height:"100px"}}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{color: "rgba(65, 65, 65, 1)",
            paddingLeft:"519px",
          fontWeight:"600",fontSize:"32px",letterSpacing:"5%"}}
          >
           PRODUCT LIST PAGE
          </Typography>
        </Toolbar>
      </AppBar>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
