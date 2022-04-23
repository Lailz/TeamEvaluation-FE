import { useState } from "react";
import { useSelector } from "react-redux";

// MUI
import { useTheme } from "@mui/material/styles";
import { FormControl, InputLabel, OutlinedInput, Select } from "@mui/material";

// Styles
import { MenuProps } from "./styles";
import SelectedCriteria from "./SelectedCriteria";
import CriteriaItem from "./CriteriaItem";

function CriteriaSelector() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const criteriaList = useSelector((state) =>
    state.criteriaReducer.criterias.map(
      (criteria) => `${criteria.name} - ${criteria.weight}`
    )
  );

  const handleChange = ({ target: { value } }) => {
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Select Criteria</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => <SelectedCriteria selected={selected} />}
          MenuProps={MenuProps}
        >
          {criteriaList.map((criteria) => (
            <CriteriaItem
              criteria={criteria}
              theme={theme}
              personName={personName}
            />
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CriteriaSelector;
