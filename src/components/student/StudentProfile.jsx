import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../App.css";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const { firstName, lastName, email, department } = student;
  const loadStudent = async () => {
    const results = await axios.get(
      `http://localhost:8080/students/student/${id}`
    );
    setStudent(results.data);
  };

  useEffect(() => {
    loadStudent();
  }, []);

  return (
    <section className="centered-section py-5">
      <div className="card custom-card text-center mb-3 shadow">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          className="card-img-top"
          alt={firstName}
        />
        <div className="card-body">
          <h5 className="card-title">
            {firstName} {lastName}
          </h5>
          <p className="card-text">
            {email} <br />
            {department}
          </p>
          <Link to={"/view-students"} className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
