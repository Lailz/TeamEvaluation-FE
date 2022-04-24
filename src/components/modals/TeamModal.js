import { useState } from "react";
import { useDispatch } from "react-redux";

// MUI
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { modalStyle } from "./styles";
import { createTeam } from "../../store/slices/teamSlice";

// Slices

function TeamModal({ project }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [team, setTeam] = useState({ name: "" });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) =>
    setTeam({ ...team, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(project, team);
    dispatch(createTeam({ project, team, handleClose }));
  };

  return (
    <>
      <Button onClick={handleOpen}>New Team</Button>
      <Modal open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
          <h2>New {project.name} Team</h2>
          <TextField
            margin="normal"
            fullWidth
            required
            label="Team Name"
            name="name"
            onChange={handleChange}
            value={team.name}
            autoComplete="name"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Team
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default TeamModal;
