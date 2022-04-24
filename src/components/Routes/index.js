import React from "react";
import { Route, Routes } from "react-router";

// Components
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import JudgeForm from "../Judge/JudgeForm";
import ProjectDetail from "../Project/ProjectDetail";
import SemesterList from "../Semester/SemesterList";

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

      {/* Judges */}
      <Route path="/projects/:projectSlug/judge" element={<JudgeForm />} />
    </Routes>
  );
};

export default Routers;
