import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";
import CQAnswer from "./CQAnswer";

const ClosedQuestion = () => {
  const [numOfAns, setNumOfAnd] = useState(1);
  const [numArray, setNumArray] = useState([]);

  const addAnswer = () => {
    setNumOfAnd(numOfAns + 1);
    setNumArray([...numArray, numOfAns]);
  };

  const renderAnswers = (numArray) => {
    const answers = numArray.map((i) => (
      <CQAnswer numArray={numArray} key={i} setNumArray={setNumArray} num={i} />
    ));
    return answers;
  };

  return (
    <div className="ClosedQuestion">
      <FormGroup>
        <FormLabel>Question</FormLabel>
        <FormControl type="textarea" placeholder="Enter Question" />
        <FormLabel>True answer:</FormLabel>
        {renderAnswers(numArray)}
        <Button onClick={addAnswer}>Add false answer</Button>
      </FormGroup>
    </div>
  );
};

export default ClosedQuestion;
