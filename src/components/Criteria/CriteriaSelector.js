import { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

// MUI
import { FormControl } from "@mui/material";

function CriteriaSelector() {
  const [selectedOption, setSelectedOption] = useState(null);

  const criteriaOptions = useSelector((state) =>
    state.criteriaReducer.criterias.map((criteria) => ({
      value: criteria.id,
      label: `${criteria.name} - ${criteria.weight}`,
    }))
  );

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          isMulti
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={criteriaOptions}
        />
      </FormControl>
    </div>
  );
}

export default CriteriaSelector;
