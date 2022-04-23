import React, { useState } from "react";

// Components
import TeamList from "../Team/TeamList";
import TeamModal from "../modals/TeamModal";

// MUI
import { Accordion, AccordionSummary, Typography } from "@mui/material";

const ProjectItem = ({ project }) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {project.name}
        </Typography>

        {project.teams?.length > 0 ? (
          <TeamList teams={project.teams} />
        ) : (
          <Typography>No teams added yet</Typography>
        )}
        <TeamModal project={project} />
      </AccordionSummary>
    </Accordion>
  );
};

export default ProjectItem;
