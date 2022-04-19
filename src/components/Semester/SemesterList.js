import { useState } from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
