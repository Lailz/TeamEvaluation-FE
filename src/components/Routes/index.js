import React from "react";
import { Route, Routes } from "react-router";
import Signin from "../Auth/Signin";

// Components
import SemesterList from "../Semester/SemesterList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/semesters" element={<SemesterList />} />
    </Routes>
  );
};

export default Routers;
