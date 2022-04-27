import React from "react";
import { Route, Routes } from "react-router";

// Components
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import JudgeForm from "../Judge/JudgeForm";
import ProjectDetail from "../Project/ProjectDetail";
import Report from "../Report";
import ReportForm from "../Report/ReportForm";
import SemesterList from "../Semester/SemesterList";
import TeamList from "../Team/TeamList";

const Routers = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* Semesters */}
      <Route path="/semesters" element={<SemesterList />} />

      {/* Project Reports */}
      <Route
        path="/projects/:projectSlug/teams/:teamSlug"
        element={<ProjectDetail />}
      />
      <Route path="/projects/:projectSlug" element={<ProjectDetail />} />

      {/* Judges and Grading */}
      <Route path="/projects/:projectSlug/judge" element={<JudgeForm />} />
      <Route path="/projects/:projectSlug/grade" element={<Report />} />
    </Routes>
  );
};

export default Routers;
