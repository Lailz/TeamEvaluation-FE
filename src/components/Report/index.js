import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

// MUI
import { Container } from "@mui/material";
import TeamList from "../Team/TeamList";

const Report = () => {
  const { projectSlug } = useParams();
  const judge = useSelector((state) => state.judgeReducer.judge);
  const project = useSelector((state) =>
    state.projectReducer.projects.find(
      (_project) => _project.slug === projectSlug
    )
  );
  const teams = useSelector((state) =>
    state.teamReducer.teams.filter((team) => team.project === project.id)
  );
  if (!judge) return <Navigate to={`/projects/${projectSlug}/judge`} />;
  return (
    <Container>
      <h2>{project.name}</h2>
      <h3>Hello, {judge}</h3>
      <p>
        Please watch the presentations of the following teams carefully, and
        judge them according to the criteria below
      </p>
      <TeamList teams={teams} />
    </Container>
  );
};

export default Report;
