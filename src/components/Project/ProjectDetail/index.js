import { useParams } from "react-router";
import { useSelector } from "react-redux";

// MUI
import { Container } from "@mui/material";
import TeamFilter from "./TeamFilter";
import Loading from "../../Loading";

const ProjectDetail = () => {
  const { projectSlug, teamSlug } = useParams();
  const projects = useSelector((state) => state.projectReducer.projects);
  const loading = useSelector((state) => state.projectReducer.loading);
  if (loading) return <Loading />;
  const project = projects.find((_project) => _project.slug === projectSlug);
  return (
    <Container>
      <h2>{project.name}</h2>
      <h4>{project.semester}</h4>
      <TeamFilter project={project} />
    </Container>
  );
};

export default ProjectDetail;
