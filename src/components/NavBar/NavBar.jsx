import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



const NavBar = () => {
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <h1>Maxime PAHUD</h1>
          </Typography>
          <Tabs>
            <Tab label="Item 1" />
            <Tab label="Item 2" />
            <Tab label="Item 3" />
            <Tab label="Item 4" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default NavBar;