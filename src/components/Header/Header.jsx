import { AppBar, Link, Toolbar } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{
        backgroundColor: "#3f51b5",
        p: 2
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "lg",
          margin: "auto",
          textAlign: { xs: "center", sm: "left" },
          width: { xs: "initial", sm: "100%" }
        }}
      >
        <Link
          component={RouterLink}
          rel="noopener noreferrer"
          sx={{ color: "#e8eaf6", fontWeight: "600", textDecoration: "none" }}
          title="Go to the Marketplace page"
          to="/"
          variant="h4"
        >
          Marketplace
        </Link>
      </Toolbar>
    </AppBar>
  );
};
