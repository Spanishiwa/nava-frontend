import { Box, Typography } from "@mui/material";
import React from "react";

export const KeyValueText = ({ title, value }) => {
  return (
    <Box component="dl" sx={{ my: 0 }}>
      <Typography
        component="dt"
        sx={{ display: "inline", fontWeight: "600" }}
        variant="h6"
      >
        {title}:
      </Typography>
      <Typography component="dd" sx={{ display: "inline" }} variant="h6">
        {" "}
        {value}
      </Typography>
    </Box>
  );
};
