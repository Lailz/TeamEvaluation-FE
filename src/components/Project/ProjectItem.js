// Components
import ProjectTeams from "./ProjectTeams";
import TeamModal from "../modals/TeamModal";

// MUI
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          <Link to={`/projects/${project.slug}`}>{project.name}</Link>
        </Typography>

        {project.teams?.length > 0 ? (
          <ProjectTeams projectId={project.id} />
        ) : (
          <Typography>No teams added yet</Typography>
        )}
        <TeamModal project={project} />
      </AccordionSummary>
    </Accordion>
  );
};

export default ProjectItem;
