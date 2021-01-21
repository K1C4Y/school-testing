import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentCocpit from "./components/student/StudentCocpit.jsx";
import TeacherCocpit from "./components/teacher/TeacherCocpit.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {
  const [teacherLogged, setTeacherLogged] = useState(true);
  const [studentLogged, setStudentLogged] = useState(false);

  const logOut = () => {
    setTeacherLogged(false);
    setStudentLogged(false);
  };

  return (
    <div id="AppComponent">
      {studentLogged ? <StudentCocpit logOut={logOut} /> : null}
      {teacherLogged ? <TeacherCocpit logOut={logOut}/> : null}
      {!teacherLogged && !studentLogged ? (
        <Login
          setTeacherLogged={setTeacherLogged}
          setStudentLogged={setStudentLogged}
        />
      ) : null}
      {!teacherLogged && !studentLogged ? <Register /> : null}
    </div>
  );
}

export default App;
