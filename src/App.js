import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentCocpit from "./components/student/StudentCocpit.jsx";
import TeacherCocpit from "./components/teacher/TeacherCocpit.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
function App() {
  const [teacherLogged, setTeacherLogged] = useState(false);
  const [studentLogged, setStudentLogged] = useState(true);

  return (
    <div id="AppComponent">
      {studentLogged ? <StudentCocpit /> : null}
      {teacherLogged ? <TeacherCocpit /> : null}
      {!teacherLogged && !studentLogged ? <Login setTeacherLogged={setTeacherLogged} setStudentLogged={setStudentLogged}/> : null}
      {!teacherLogged && !studentLogged ? <Register /> : null}
    </div>
  );
}

export default App;
