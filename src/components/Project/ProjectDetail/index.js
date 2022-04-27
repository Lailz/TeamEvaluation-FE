import { useParams } from "react-router";
import { useSelector } from "react-redux";

// MUI
import {
  Button,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TeamFilter from "./TeamFilter";
import Loading from "../../Loading";
import ShareModal from "../../modals/ShareModal";

const ProjectDetail = () => {
  const { projectSlug, teamSlug } = useParams();
  const projects = useSelector((state) => state.projectReducer.projects);
  const loading = useSelector((state) => state.projectReducer.loading);
  const teams = useSelector((state) => state.teamReducer.teams);
  let foundTeam = null;
  if (loading) return <Loading />;
  const project = projects.find((_project) => _project.slug === projectSlug);

  if (teamSlug) {
    foundTeam = teams.find((team) => team.slug === teamSlug);
  }
  return (
    <Container>
      <h2>{project.name}</h2>
      <h4>{project.semester}</h4>
      <ShareModal project={project} />
      <TeamFilter project={project} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Criteria</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Avg. Score</TableCell>
              <TableCell>Weighted Avg.</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProjectDetail;
