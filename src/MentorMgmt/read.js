import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ReadMentor() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6435766a537112453fd710b5.mockapi.io/mentors")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  const setData = (data) => {
    let { id, firstName, lastName, position, mobileno } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Position", position);
    localStorage.setItem("Mobile Number", mobileno);
  };
  const getData = () => {
    axios
      .get(`https://6435766a537112453fd710b5.mockapi.io/mentors`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://6435766a537112453fd710b5.mockapi.io/mentors/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div className="read-student">
      <h1>MENTOR DETAILS</h1>
      <div className="student-data">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Position</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {APIData.map((data) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.position}</td>
                  <td>{data.mobileno}</td>
                  <td>
                    <Link to="/mentors/update">
                      <button
                        onClick={() => setData(data)}
                        className="btn btn-primary"
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => onDelete(data.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
