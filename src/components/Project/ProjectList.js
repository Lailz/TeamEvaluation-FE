// Components
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectList = projects.map((project) => (
    <ProjectItem project={project} key={project.id} />
  ));

  return (
    <>
      <h4>Projects</h4>
      {projectList}
    </>
  );
}

export default ProjectList;
