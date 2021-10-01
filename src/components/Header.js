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
      <AppBar elevation={0}>
        <Toolbar className="toolbar">
          <IconButton>
            <img src={MenuIcon} className="menu"></img>
          </IconButton>
          <IconButton>
              <img src={LogoIcon} className="main-logo"></img>
          </IconButton>
          <IconButton>
              <img src={ProfileIcon} className="menu"></img>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

