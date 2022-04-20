// Components
import ProjectItem from "./ProjectItem";

// Material UI
import { Container } from "@mui/material";

function ProjectList({ projects }) {
  const projectList = projects.map((project) => (
    <ProjectItem project={project} key={project.id} />
  ));

  return (
    <div>
      <Container>
        <h1>Projects</h1>
        {projectList}
      </Container>
    </div>
  );
}

export default ProjectList;
