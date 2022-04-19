import React from "react";
import { Route, Routes } from "react-router";

// Components
import SemesterList from "../Semester/SemesterList";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";

const Routers = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/semesters" element={<SemesterList />} />
    </Routes>
  );
};

export default Routers;
