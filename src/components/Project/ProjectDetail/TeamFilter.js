import { useSelector } from "react-redux";

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const TeamFilter = ({ project }) => {
  const teams = useSelector((state) =>
    state.teamReducer.teams.filter((team) => team.project === project.id)
  );
  const teamRow = teams.map((team) => (
    <TableCell key={team.id}>
      <Link to={`/projects/${project.slug}/teams/${team.slug}`}>
        {team.name}
      </Link>
    </TableCell>
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
