import { Typography } from "@mui/material";
import React from "react";

const TeamList = ({ teams }) => {
  return (
    <Typography>Teams: {teams.map((team) => `${team.name}, `)}</Typography>
  );
};

export default TeamList;
