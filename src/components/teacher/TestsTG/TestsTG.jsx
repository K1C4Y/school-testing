import React, { useState } from "react";
import CompletedTest from "../../student/CompletedTest/CompletedTest.jsx";
import Table from "react-bootstrap/Table";

const TestsTG = () => {
  const [testDesc, setTests] = useState([
    { name: " Ekonometria", studentName: "Zbyszek", reviewed: false, id: 1 },
    { name: "Inkormatyka", studentName: "Leszek", reviewed: true, id: 2 },
  ]);
  const [multipleTestMode, setMultipleTestMode] = useState(true);

  const renderTest = (id) => {
    setMultipleTestMode(false);
    return <CompletedTest />;
  };

  const renderTests = (testDesc) => {
    const tests = testDesc.map((test) => (
      <tr key={test.id} >
        <td>{test.name}</td>
        <td>{test.studentName}</td>
        <td>{test.reviewed}</td>
      </tr>
    ));
    return tests;
  };

  const renderTable = (testDesc) => {
    const massage = (
      <Table striped bordered hover>
        <tr>
          <td>Test Name</td>
          <td>Student Name</td>
          <td>Reviewd</td>
        </tr>
        {renderTests(testDesc)}
      </Table>
    );
    return massage;
  };


  return (
    <div id="testTG">
      {multipleTestMode ? renderTable(testDesc) : renderTest()}
    </div>
  );
};

export default TestsTG;
