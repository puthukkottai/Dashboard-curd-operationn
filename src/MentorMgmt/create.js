import React, { useState } from "react";
import axios from "axios";
export default function CreateMentor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [mobileno, setMobile] = useState("");
  const postData = () => {
    axios.post("https://6435766a537112453fd710b5.mockapi.io/mentors", {
      firstName,
      lastName,
      position,
      mobileno,
    });
    alert("Mentor Created Successfully!!!");
    setFirstName("");
    setLastName("");
    setMobile("");
    setPosition("");
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
            placeholder="position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <input
            placeholder="mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <div className="buttonDiv">
            <button className="btn btn-primary" onClick={postData}>
              ADD MENTOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
