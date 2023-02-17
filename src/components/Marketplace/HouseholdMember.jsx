import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export const HouseholdMember = ({ name, children }) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 375, textAlign: "left" }}>
      <CardContent sx={{ px: 3, py: 2 }}>
        <Typography component="p" sx={{ mb: 2 }}>
          <Typography
            component="strong"
            sx={{ fontWeight: "600", my: "16px" }}
            variant="h5"
          >
            {name}
          </Typography>
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};
