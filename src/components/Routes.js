import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "../StudentMgmt";
import Mentor from "../MentorMgmt";
import CreateMentor from "../MentorMgmt/create";
import ReadMentor from "../MentorMgmt/read";
import CreateStudent from "../StudentMgmt/creation";
import ReadStudent from "../StudentMgmt/read";
import Update from "../StudentMgmt/update";
import UpdateMentor from "../MentorMgmt/update";
export default function RoutesPage() {
  return (
    <div>
      <Routes>
        <Route path="/students" element={<Student />}></Route>
        <Route path="/students/create" element={<CreateStudent />} />
        <Route path="/students/read" element={<ReadStudent />} />
        <Route path="/mentors" element={<Mentor />}></Route>
        <Route path="/mentors/create" element={<CreateMentor />} />
        <Route path="/mentors/read" element={<ReadMentor />} />
        <Route path="/students/update" element={<Update />} />
        <Route path="/mentors/update" element={<UpdateMentor />} />
      </Routes>
    </div>
  );
}
