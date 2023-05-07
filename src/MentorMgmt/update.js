import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateMentor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [mobileno, setMobile] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setPosition(localStorage.getItem("Position"));
    setMobile(localStorage.getItem("Mobile Number"));
  }, []);
  const updateAPIData = () => {
    axios.put(`https://6435766a537112453fd710b5.mockapi.io/mentors/${id}`, {
      firstName,
      lastName,
      position,
      mobileno,
    });
    alert("Data Updated Successfully View Table");
  };
  return (
    <div className="update-student">
      <h1>UPDATE MENTOR DATA</h1>
      <div className="student-update">
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
              <button className="btn btn-primary" onClick={updateAPIData}>
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
