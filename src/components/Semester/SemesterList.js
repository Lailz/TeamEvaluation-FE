import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Actions
import { semesterListFetch } from "../../store/slices/semesterSlice";

// Components
import SemesterItem from "./SemesterItem";

// Material UI
import { Container } from "@mui/material";
import Loading from "../Loading";
import { Navigate } from "react-router";

// const semesters = [
//   { id: 1, name: "Semester Hell" },
//   { id: 2, name: "Semester Heaven" },
// ];

function SemesterList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const semesters = useSelector((state) => state.semesterReducer.semesters);
  const loading = useSelector((state) => state.semesterReducer.loading);

  useEffect(() => {
    if (user) {
      dispatch(semesterListFetch());
    }
  }, []);

  if (!user) return <Navigate to="/signin" />;
  if (loading) return <Loading />;
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
