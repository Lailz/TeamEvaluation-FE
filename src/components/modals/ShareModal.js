import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

// MUI
import { Box, Button, Modal, TextField } from "@mui/material";
import { modalStyle } from "./styles";

function ShareModal({ project }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(
    `http://localhost:3000/projects/${project.slug}/judge`
  );
  const [copied, setCopied] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCopied(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(project);
  };

  return (
    <>
      <Button onClick={handleOpen}>Share</Button>
      <Modal open={open} onClose={handleClose}>
        <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
          <h2>Project Share Link</h2>
          <TextField
            margin="normal"
            fullWidth
            required
            value={value}
            autoFocus
          />
          <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
            <Button sx={{ margin: 2 }}>Copy to clipboard</Button>
          </CopyToClipboard>
          {copied && <span>Copied!</span>}
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ mt: 3, mb: 2, margin: 5 }}
          >
            Done
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default ShareModal;
