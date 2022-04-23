import { useState } from "react";
import { useSelector } from "react-redux";

// MUI
import { Box, Button, Modal, TextField } from "@mui/material";
import { modalStyle } from "./styles";

function ProjectModal() {
  const [open, setOpen] = useState(false);

  const [project, setProject] = useState({
    name: "",
    weight: 0,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) =>
    setProject({ ...project, [event.target.name]: event.target.value });

  return (
    <>
      <Button onClick={handleOpen}>New Project</Button>
      <Modal open={open} onClose={handleClose}>
        <Box component="form" sx={modalStyle}>
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
