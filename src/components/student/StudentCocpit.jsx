import React, { useState } from "react";
import StNavigation from "./StNavigation.jsx";
import TestCode from "./TestCode.jsx";
import TestsDone from "./TestsDone.jsx";

const StudentCocpit = ({logOut}) => {
  const [testCode, setTestCode] = useState(true);
  const [testsCompleted, setTestsCompleted] = useState(false);
  return (
    <div id="studentCocpit">
      <StNavigation setTestCode={setTestCode} setTestsCompleted={setTestsCompleted} logOut={logOut}/>
      {testCode ? <TestCode /> : null}
      {testsCompleted ? <TestsDone /> : null}
    </div>
  );
};

export default StudentCocpit;
