import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

const ReportForm = () => {
  const { projectSlug } = useParams();
  const judge = useSelector((state) => state.judgeReducer.judge);
  const teams = useSelector((state) =>
    state.teamReducer.teams.filter((team) => team.project.slug === projectSlug)
  );
  if (!judge) return <Navigate to={`/projects/${projectSlug}/judge`} />;

  return <Container>ReportForm</Container>;
};

export default ReportForm;
