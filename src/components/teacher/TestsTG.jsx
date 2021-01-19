import React, { useState } from "react";
import ComplTest from './ComplTest.jsx';

const TestTG = () => {
  const [Tests, setTests] = useState([
    { name: "Ekonometria", studentName: "Zbyszek", reviewed: false },
    { name: "Informatyka", studentName: "Leszek", reviewed: true },
  ]);
  const [multipleTestMode, setMultipleTestMode] = useState(false);
  const renderTests = () => {
    let i = -1;
    const tests = Tests.map((test) => (
      <tr key={i++}>
        <td>{test.name}</td>
        <td>{test.studentName}</td>
        <td>{test.reviewed}</td>
      </tr>
    ));
    return tests;
  };

  const renderTable = () => {
    <table>
      <tr>
        <td>Test Name</td>
        <td>Student Name</td>
        <td>Reviewd</td>
      </tr>
      {renderTests()}
    </table>;
  };
  const renderTest = () => {
    setMultipleTestMode(false);
    return <ComplTest />;
  };
  return (
    <div id="testTG">{multipleTestMode ? renderTable() : renderTest()}</div>
  );
};
