import { useState } from "react";
import { useDispatch } from "react-redux";

// MUI
import { Box, Button, Modal, Snackbar, TextField } from "@mui/material";
import { modalStyle } from "./styles";

// Slices
import { createCriteria } from "../../store/slices/criteriaSlice";

function CriteriaModal() {
  const dispatch = useDispatch();
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [criteria, setCriteria] = useState({
    name: "",
    weight: 0,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSnackBarOpen = () => setSnackBarOpen(true);
  const handleSnackBarClose = () => setSnackBarOpen(false);

  const handleChange = (event) =>
    setCriteria({ ...criteria, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCriteria({ criteria, handleSnackBarOpen, handleClose }));
  };

  return (
    <>
      <Button onClick={handleOpen}>New Criteria</Button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
          <h2>New Criteria</h2>
          <TextField
            margin="normal"
            fullWidth
            required
            label="Criteria"
            name="name"
            onChange={handleChange}
            value={criteria.name}
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            required
            label="Weight"
            name="weight"
            onChange={handleChange}
            value={criteria.weight}
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
            Create Criteria
          </Button>
        </Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBarOpen}
        onClose={handleSnackBarClose}
        message={`New criteria: ${criteria.name} added!`}
      />
    </>
  );
}

export default CriteriaModal;
