import React, { useState } from "react";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectList from "../Project/ProjectList";
import ProjectModal from "../../modals/ProjectModal";

const SemesterItem = ({ semester }) => {
  const [expanded, setExpanded] = useState(false);

  const totalWeight =
    semester.projects.length > 0
      ? semester.projects
          .map((project) => project.weight)
          .reduce((a, b) => a + b)
      : 0;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion expanded={expanded} onChange={handleChange(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {semester.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ProjectModal totalWeight={totalWeight} />
        {semester.projects.length > 0 ? (
          <ProjectList projects={semester.projects} />
        ) : (
          <h4>No Projects Yet</h4>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default SemesterItem;
