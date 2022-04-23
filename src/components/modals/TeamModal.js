import { useState } from "react";
import { useDispatch } from "react-redux";

// MUI
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { modalStyle } from "./styles";

// Slices

function TeamModal({ project }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [team, setTeam] = useState("");
  const [teams, setTeams] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => setTeam(event.target.value);

  const handleAnotherTeam = () => {
    setTeams([...teams, team]);
    setTeam("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(project, teams);
  };

  return (
    <>
      <Button onClick={handleOpen}>New Team</Button>
      <Modal open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
          <h2>New {project.name} Team</h2>
          <Typography>Teams: {teams.map((team) => `${team}, `)}</Typography>
          <TextField
            margin="normal"
            fullWidth
            required
            label="Team Name"
            name="team"
            onChange={handleChange}
            value={team}
            autoComplete="name"
            autoFocus
          />
          <Button
            type="button"
            onClick={handleAnotherTeam}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add another team
          </Button>
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
