import { Box, Chip } from "@mui/material";
import React from "react";

const SelectedCriteria = ({ selected }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
      {selected.map((value) => (
        <Chip key={value} label={value} />
      ))}
    </Box>
  );
};

export default SelectedCriteria;
