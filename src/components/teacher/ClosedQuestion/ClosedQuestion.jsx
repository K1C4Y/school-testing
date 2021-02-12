import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";
import CQAnswer from "../CQAnswer/CQAnswer";

const ClosedQuestion = ({ num, setNumOfClosedQuestionsArray,numOfClosedQuestionsArray }) => {
  const [numOfAns, setNumOfAnd] = useState(1);
  const [numArray, setNumArray] = useState([]);

  const deleteClosedQuestionHendeler = () => {
    setNumOfClosedQuestionsArray(
      numOfClosedQuestionsArray.filter((number) => number !== num)
    );
  };

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
      <FormLabel>Question</FormLabel>
      <FormControl type="textarea" placeholder="Enter Question" />
      <FormLabel>True answer:</FormLabel>
      {renderAnswers(numArray)}
      <Button onClick={addAnswer}>Add answer</Button>
      <Button onClick={deleteClosedQuestionHendeler}>Delete Question</Button>
    </div>
  );
};

export default ClosedQuestion;
