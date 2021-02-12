import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const TestsDone = () => {
  const [testsDone, setTestsDone] = useState([
    { testName: "tn1", grade: 5 },
    { testName: "tn2", grade: 3 },
  ]);
  const renderTests = (testsDone) => {
    const tests = testsDone.map((test) => (
      <tr>
        <td>{test.testName}</td>
        <td>{test.grade}</td>
      </tr>
    ));
    console.log(tests);
    return tests;
  };

  return (
    <div id="testsDone">
      <Table stdiped bordered hover size="sm" >
        <thead>
          <tr>
            <td>Name</td>
            <td>Grade</td>
          </tr>
        </thead>
        <tbody>{renderTests(testsDone)}</tbody>
      </Table>
    </div>
  );
};

export default TestsDone;
