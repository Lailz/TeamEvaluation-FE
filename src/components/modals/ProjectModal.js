import { useState } from "react";
import { useDispatch } from "react-redux";

// MUI
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { modalStyle } from "./styles";

// Slices
import { createProject } from "../../store/slices/semesterSlice";

function ProjectModal({ semester }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({
    name: "",
    weight: 0,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) =>
    setProject({ ...project, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProject({ semester, project, handleClose }));
  };

  return (
    <>
      <Button onClick={handleOpen}>New Project</Button>
      <Modal open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
          <h2>New {semester.name} Project</h2>
          <TextField
            margin="normal"
            fullWidth
            required
            label="Project Name"
            name="name"
            onChange={handleChange}
            value={project.name}
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            required
            label="Project Weight"
            name="weight"
            onChange={handleChange}
            value={project.weight}
            autoComplete="name"
            type="number"
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Project
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default ProjectModal;
