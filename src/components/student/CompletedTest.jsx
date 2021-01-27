import React, { useState } from "react";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";

const [test, setTest] = useState({});
const [testAnswer, setTestAnswer] = useState({});

const CompletedTest = (id) => {
  const setData = "placeholder for async request " + id;
  setData;
  const renderComplTest = (test, testAnswer) => {
    const questions = test.questions.map((question) => <p>{question}</p>);
    const answers = testAnswer.answers.map((answer) => <p>{answer}</p>);
    const block = [];
    while (i < questions.lenght) {
      block.push(questions[i]);
      blick.push(answers[i]);
    }
    return block;
  };

  return (
    <div className="completedTest">
      <h1>{test.name}</h1>
      <h2>{testAnswer.student}</h2>
      {renderComplTest(test, testAnswer)}
      <FormGroup>
        <FormControl as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default CompletedTest;
