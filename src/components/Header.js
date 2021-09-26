import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../assets/logo/hamburger.png';
import ProfileIcon from '../assets/logo/profile.png';
import LogoIcon from '../assets/logo/logo.png';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} height="50px">
      <AppBar position="fixed">
        <Toolbar style={{justifyContent:"space-between"}}>
          <IconButton>
            <img src={MenuIcon}></img>
          </IconButton>
          <IconButton>
              <img src={LogoIcon} height='35px'></img>
          </IconButton>
          <IconButton>
              <img src={ProfileIcon} height='28px'></img>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

