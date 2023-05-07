import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileno, setMobile] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setMobile(localStorage.getItem("Mobile Number"));
  }, []);
  const updateAPIData = () => {
    axios.put(`https://643569a483a30bc9ad60101a.mockapi.io/students/${id}`, {
      firstName,
      lastName,
      mobileno,
    });
    alert("Data Updated Successfully View Table");
  };
  return (
    <div className="update-student">
      <h1>UPDATE STUDENT DATA</h1>
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
