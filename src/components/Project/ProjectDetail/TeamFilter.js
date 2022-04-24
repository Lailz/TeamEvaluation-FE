import { useSelector } from "react-redux";

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TeamFilter = ({ projectId }) => {
  const teams = useSelector((state) =>
    state.teamReducer.teams.filter((team) => team.project === projectId)
  );
  const teamRow = teams.map((team) => (
    <TableCell key={team.id}>{team.name}</TableCell>
  ));
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>All</TableCell>
            {teamRow}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default TeamFilter;
