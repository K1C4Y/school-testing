import React, { useState } from "react";
import CreateTest from "./CreateTest.jsx";
import TrNavivgation from "./TrNavigation.jsx";
import TestTG from "./TestsTG.jsx";

const TeacherCocpit = ({ logOut }) => {
  const [createTestBool, setCTB] = useState(false);
  const [testTGBool, setTTGB] = useState(true);

  return (
    <div id="teacherCocpit">
      <TrNavivgation setCTB={setCTB} setTTGB={setTTGB} logOut={logOut} />
      {createTestBool ? <CreateTest /> : null}
      {testTGBool ? <TestTG /> : null}
    </div>
  );
};

export default TeacherCocpit;
