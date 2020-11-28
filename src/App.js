import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentCocpit from "./components/StudentCocpit.jsx";
import TeacherCocpit from "./components/TeacherCocpit.jsx";
import CreateTest from "./components/CreateTest.jsx"
function App() {
  const [teacherLogged, setTeacherLogged] = useState(false);
  const [studentLogged, setStudentLogged] = useState(true);
	
  return (
    <div id="AppComponent">
       {/* {studentLogged ? <StudentCocpit /> : null} */}
       {/* {teacherLogged ? <TeacherCocpit /> : null} */}
				<CreateTest/>
    </div>
  );
}

export default App;
