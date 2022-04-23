import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import SelectedCriteria from "./SelectedCriteria";

// MUI
import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

// Styles
import { getStyles, MenuProps } from "./styles";

function CriteriaSelector() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const criteriaList = useSelector((state) =>
    state.criteriaReducer.criterias.map(
      (criteria) => `${criteria.name} - ${criteria.weight}`
    )
  );

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  console.log(
    "🚀 ~ file: CriteriaSelector.js ~ line 56 ~ CriteriaSelector ~ MenuProps",
    MenuProps
  );
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Select Criteria</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => <SelectedCriteria selected={selected} />}
          MenuProps={MenuProps}
        >
          {criteriaList.map((criteria) => (
            <MenuItem
              key={criteria}
              value={criteria}
              style={getStyles(criteria, personName, theme)}
            >
              {criteria}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CriteriaSelector;
