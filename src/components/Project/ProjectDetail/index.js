import { useParams } from "react-router";
import { useSelector } from "react-redux";

// MUI
import { Container } from "@mui/material";
import TeamFilter from "./TeamFilter";

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const project = useSelector((state) =>
    state.projectReducer.projects.find(
      (_project) => _project.slug === projectSlug
    )
  );
  return (
    <Container>
      <h2>{project.name}</h2>
      <h4>{project.semester}</h4>
      <TeamFilter projectId={project.id} />
    </Container>
  );
};

export default ProjectDetail;
