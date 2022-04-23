// Components
import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";

function ProjectList({ semesterId }) {
  const projects = useSelector((state) =>
    state.projectReducer.projects.filter(
      (project) => project.semester === semesterId
    )
  );
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
