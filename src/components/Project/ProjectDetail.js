import { useParams } from "react-router";
import { useSelector } from "react-redux";

// Components
import TeamRow from "../Team/TeamRow";

// MUI
import {
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  const project = useSelector((state) =>
    state.projectReducer.projects.find(
      (_project) => _project.slug === projectSlug
    )
  );
  return (
    <Container>
      <h2>{project.name}</h2>
      <h4>{project.semester}</h4>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>All</TableCell>
              <TeamRow projectId={project.id} />
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProjectDetail;
