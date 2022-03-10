import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    // const classes = useStyles();
  
    return (
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4">
            SHOPPING LIST
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
export default Navbar;
  