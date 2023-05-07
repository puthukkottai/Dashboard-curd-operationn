import React, { useState } from "react";
import axios from "axios";
export default function CreateStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileno, setMobile] = useState("");
  const postData = () => {
    axios.post("https://643569a483a30bc9ad60101a.mockapi.io/students", {
      firstName,
      lastName,
      mobileno,
    });
    alert("Student Created Successfully!!!");
    setFirstName("");
    setLastName("");
    setMobile("");
  };
  return (
    <div className="student-create">
      <h1>STUDENT CREATION</h1>
      <div className="card">
        <div className="card-body">
          <input
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <div className="buttonDiv">
            <button className="btn btn-primary" onClick={postData}>
              ADD STUDENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
