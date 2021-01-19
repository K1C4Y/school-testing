import React, { useState } from "react";
const TestsDone = () => {
  const [testsDone, setTestsDone] = useState([
    { testName : "tn1", grade : 5 },
    { testName : "tn2", grade : 3 },
  ]);
  const renderTests = (testsDone) => {
    const tests = testsDone.map((test) => (
      <li>
        Test: {test.testName} Grade: {test.grade}
      </li>
    ));
    console.log(tests);
    return tests;
  };

  return (
    <div id="testsDone">
      <ul>{renderTests(testsDone)}</ul>
    </div>
  );
};

export default TestsDone;
