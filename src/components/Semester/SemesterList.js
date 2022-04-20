import SemesterItem from "./SemesterItem";
import { Container } from "@mui/material";

const semesters = [
  { id: 1, name: "Semester Hell" },
  { id: 2, name: "Semester Heaven" },
];

function SemesterList() {
  const semesterList = semesters.map((semester) => (
    <SemesterItem semester={semester} key={semester.id} />
  ));

  return (
    <div>
      <Container>
        <h1>Semesters</h1>
        {semesterList}
      </Container>
    </div>
  );
}

export default SemesterList;
