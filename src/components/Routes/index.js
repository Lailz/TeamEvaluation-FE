import React from "react";
import { Route, Routes } from "react-router";

// Components
import SemesterList from "../Semester/SemesterList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SemesterList />} />
    </Routes>
  );
};

export default Routers;
