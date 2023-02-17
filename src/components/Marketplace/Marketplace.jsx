import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { HouseholdMember } from "./HouseholdMember";
import { KeyValueText } from "./KeyValueText";
import { getNewMember, MOCK_HOUSEHOLD } from "./utils";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const Marketplace = () => {
  const [members, setMembers] = useState(MOCK_HOUSEHOLD);

  const handleClickAddMember = () => {
    setMembers((prevMembers) => {
      return [...prevMembers, getNewMember()];
    });
  };

  return (
    <Box
      component="section"
      sx={{ maxWidth: "lg", margin: "auto", width: "100%" }}
    >
      <Typography
        component="h1"
        sx={{ fontWeight: "600", my: 2, textAlign: "left" }}
        variant="h4"
      >
        Your Household
      </Typography>
      <Typography component="p" sx={{ my: 2, textAlign: "left" }} variant="h5">
        Welcome to The Marketplace! Review your household below:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, my: 4 }}>
        {members.map((member) => {
          const { name, description, favoriteFruit } = member;

          return (
            <HouseholdMember
              key={name + description + favoriteFruit}
              name={name}
            >
              <KeyValueText title="Description" value={description} />
              <KeyValueText title="Favorite fruit" value={favoriteFruit} />
            </HouseholdMember>
          );
        })}
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Button
          onClick={handleClickAddMember}
          startIcon={<PersonAddIcon aria-label="Add a new household member" />}
          size="large"
          title="Add a new household member"
          variant="contained"
        >
          Add new member
        </Button>
      </Box>
    </Box>
  );
};
