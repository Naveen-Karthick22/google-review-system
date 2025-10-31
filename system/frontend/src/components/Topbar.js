import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Topbar = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#1A73E8" }}>
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
        Google Review System
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Topbar;
