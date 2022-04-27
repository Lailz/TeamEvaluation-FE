import React, { useState } from "react";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TeamItem = ({ team }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion expanded={expanded} onChange={handleChange(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {team.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <h3>hi</h3>
      </AccordionDetails>
    </Accordion>
  );
};

export default TeamItem;
