import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import NavBar from "./components/common/NavBar";
import AddStudent from "./components/student/AddStudent.jsx";
import EditStudent from "./components/student/EditStudent.jsx";
import StudentProfile from "./components/student/StudentProfile.jsx";
import StudentsView from "./components/student/StudentsView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view-students" element={<StudentsView />} />
          <Route exact path="/add-student" element={<AddStudent />} />
          <Route exact path="/edit-student/:id" element={<EditStudent />} />
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
