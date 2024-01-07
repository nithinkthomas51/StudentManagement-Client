import { React, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const { firstName, lastName, email, department } = student;

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const loadStudent = async () => {
    const results = await axios.get(
      `http://localhost:8080/students/student/${id}`
    );
    setStudent(results.data);
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const updateStudent = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/students/update/${id}`, student);
    navigate("/view-students");
  };

  return (
    <div className="container col-sm-8 py-2 px-5 shadow">
      <h2 className="text-center">Edit Student</h2>
      <form onSubmit={(e) => updateStudent(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text col-sm-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text col-sm-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text col-sm-2" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text col-sm-2" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={department}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="d-grid gap-2 d-md-block mx-auto text-center">
          <button type="submit" className="btn btn-outline-success btn-lg me-4">
            Save
          </button>
          <Link
            to={"/view-students"}
            type="submit"
            className="btn btn-outline-warning btn-lg me-4"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
