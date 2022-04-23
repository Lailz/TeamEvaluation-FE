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
import SemesterForm from "./SemesterForm";

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
    <Container>
      <h1>Semesters</h1>
      <SemesterForm />
      {semesterList}
    </Container>
  );
}

export default SemesterList;
