import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Material UI
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { createSemester } from "../../store/slices/semesterSlice";

const SemesterForm = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [semester, setSemester] = useState({
    name: "",
    projects: [],
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (event) =>
    setSemester({ ...semester, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createSemester(semester));
    handleOpen();
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
            value={semester.name}
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        message="New semester added!"
      />
    </Accordion>
  );
};

export default SemesterForm;
