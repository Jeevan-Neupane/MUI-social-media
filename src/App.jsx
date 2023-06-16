import SideBar from "./Components/SideBar";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import AddButton from "./Components/ToolTip";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("dark");
  const DarkTheme=createTheme({
    palette:{
       mode:mode,
    }
  })
  return (
    <ThemeProvider theme={DarkTheme}>
      <Navbar />
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setmode={setmode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
