import React from "react";
import { Route, Routes } from "react-router";

// Components
import SemesterList from "../Semester/SemesterList";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import ProjectDetail from "../Project/ProjectDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/semesters" element={<SemesterList />} />
      <Route
        path="/projects/:projectSlug/teams/:teamSlug"
        element={<ProjectDetail />}
      />
      <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
    </Routes>
  );
};

export default Routers;
