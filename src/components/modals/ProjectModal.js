import { useState } from "react";
import { useDispatch } from "react-redux";

// Components
import CriteriaForm from "./CriteriaModal";
import CriteriaSelector from "../Criteria/CriteriaSelector";

// MUI
import { Box, Button, Modal, TextField } from "@mui/material";
import { modalStyle } from "./styles";

// Slices
import { createProject } from "../../store/slices/projectSlice";

function ProjectModal({ semester }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [project, setProject] = useState({
    name: "",
    weight: 0,
    teams: [],
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) =>
    setProject({ ...project, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const _project = {
      ...project,
      criterias: selectedOptions.map((option) => option.value),
    };
    dispatch(createProject({ semester, project: _project, handleClose }));
  };

  return (
    <>
      <Button onClick={handleOpen}>New Project</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit}>
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
            <CriteriaSelector
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
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
          <CriteriaForm />
        </Box>
      </Modal>
    </>
  );
}

export default ProjectModal;
