// MUI
import { MenuItem } from "@mui/material";

// Styles
import { getStyles } from "./styles";

const CriteriaItem = ({ criteria, personName, theme }) => {
  return (
    <MenuItem
      key={criteria}
      value={criteria}
      style={getStyles(criteria, personName, theme)}
    >
      {criteria}
    </MenuItem>
  );
};

export default CriteriaItem;
