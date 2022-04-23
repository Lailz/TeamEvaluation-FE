import { TableCell, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const TeamRow = ({ projectId }) => {
  const teams = useSelector((state) =>
    state.teamReducer.teams.filter((team) => team.project === projectId)
  );
  const teamRow = teams.map((team) => (
    <TableCell key={team.id}>{team.name}</TableCell>
  ));
  return <>{teamRow}</>;
};

export default TeamRow;
