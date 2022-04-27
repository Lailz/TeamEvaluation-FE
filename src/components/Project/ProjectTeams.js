import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ProjectTeams = ({ projectId }) => {
  const teams = useSelector((state) =>
    state.teamReducer.teams.filter((team) => team.project === projectId)
  );
  return (
    <Typography>Teams: {teams.map((team) => `${team.name}, `)}</Typography>
  );
};

export default ProjectTeams;
