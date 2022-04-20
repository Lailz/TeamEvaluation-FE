import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Material UI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { createSemester } from "../../store/slices/semesterSlice";

const SemesterForm = () => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const [semester, setSemester] = useState({
    name: "",
  });

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (event) =>
    setSemester({ ...semester, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createSemester(semester));
    handleAccordion(!expanded);
    setSemester({ name: "" });
  };

  return (
    <Accordion expanded={expanded} onChange={handleAccordion(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          Add a Semester
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            label="Semester Name"
            name="name"
            onChange={handleChange}
            autoComplete="name"
            autoFocus
          />
          <Button type="submit" sx={{ mt: 3, mb: 2 }}>
            Save
          </Button>
          <Button type="button" sx={{ mt: 3, mb: 2 }}>
            Cancel
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SemesterForm;
