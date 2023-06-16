import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import React from "react";

import {
  AccountBox,
  Article,
  DarkMode,
  Group,
  Home,
  Person,
  Person2,
  Settings,
  Storefront,
} from "@mui/icons-material";

function SideBar({setmode,mode}) {

  const changeTheme=()=>{
    mode==="light"?setmode("dark"):setmode("light");
  }
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} flex={1} p={2}>
      <Box position="fixed" >
      <List aria-labelledby="nested-list-subheader">
        <ListItemButton>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home Page" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Market Place" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
          <Switch  defaultChecked  onChange={changeTheme}/>
        </ListItemButton>
      </List>
      </Box>
    </Box>
  );
}

export default SideBar;
