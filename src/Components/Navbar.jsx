import styled from "@emotion/styled";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Input,
  Badge,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: " 0 10px",
  borderRadius: "5px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            display: { xs: "none", sm: "block" },
          }}
        >
          Jeevan Dev
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <Input placeholder="search" sx={{ width: "100%" }} />
        </SearchBar>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://images.unsplash.com/photo-1622151834677-70f982c9adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={() => setOpen(true)}
        >
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://images.unsplash.com/photo-1622151834677-70f982c9adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
          />
          <span>Jeevan</span>
        </UserBox>
      </StyledToobar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={()=>setOpen(false)}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
