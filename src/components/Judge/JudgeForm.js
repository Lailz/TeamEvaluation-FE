import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI
import { Box, Button, TextField } from "@mui/material";
import { modalStyle } from "../modals/styles";
import { useParams } from "react-router";
import Loading from "../Loading";

// Slices

function JudgeForm() {
  const dispatch = useDispatch();
  const [judge, setJudge] = useState({ name: "" });
  const { projectSlug } = useParams();

  const loading = useSelector((state) => state.projectReducer.loading);
  const projects = useSelector((state) => state.projectReducer.projects);
  if (loading) return <Loading />;

  const project = projects.find((_project) => _project.slug === projectSlug);

  const handleChange = (event) =>
    setJudge({ ...judge, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi");
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
        <h2>{project.name}</h2>
        <TextField
          margin="normal"
          fullWidth
          required
          label="Judge Name"
          name="name"
          onChange={handleChange}
          value={judge.name}
          autoComplete="name"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default JudgeForm;
