import React, { useState } from "react";
import { Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import ClosedQuestion from "../ClosedQuestion/ClosedQuestion.jsx";
import OpenQuestion from "../OpenQuestion/OpenQuestion.jsx";

const CreateTest = () => {
  const [numOfClosedQuestions, setNumOfClosedQuestions] = useState(null);
  const [numOfClosedQuestionsArray, setNumOfClosedQuestionsArray] = useState(
    []
  );
  const [numOfOpenQuestions, setNumOfOpenQuestions] = useState(null);
  const [numOfOpenQuestionsArray, setNumOfOpenQuestionsArray] = useState([]);

  const addClosedQuestion = () => {
    setNumOfClosedQuestions(numOfClosedQuestions + 1);
    setNumOfClosedQuestionsArray([
      ...numOfClosedQuestionsArray,
      numOfClosedQuestions,
    ]);
  };

  const renderClosedQuestions = (numOfClosedQuestionsArray) => {
    const questions = numOfClosedQuestionsArray.map((i) => (
      <ClosedQuestion
        key={i + "cq"}
        num={i}
        setNumOfClosedQuestionsArray={setNumOfClosedQuestionsArray}
        numOfClosedQuestionsArray={numOfClosedQuestionsArray}
      />
    ));
    return questions;
  };

  const addOpenQuestion = () => {
    setNumOfOpenQuestions(numOfOpenQuestions + 1);
    setNumOfOpenQuestionsArray([
      ...numOfOpenQuestionsArray,
      numOfOpenQuestions,
    ]);
  };

  const renderOpenQuestions = (numOfOpenQuestionsArray) => {
    const questions = numOfOpenQuestionsArray.map((i) => (
      <OpenQuestion
        key={i + "oq"}
        num={i}
        setNumOfOpenQuestionsArray={setNumOfOpenQuestionsArray}
        numOfOpenQuestionsArray={numOfOpenQuestionsArray}
      />
    ));
    return questions;
  };
  return (
    <div className="createTest">
      <FormGroup>
        <FormLabel>Test name</FormLabel>
        <FormControl type="textarea" placeholder="Test name here" />
        {renderClosedQuestions(numOfClosedQuestionsArray)}
        <Button onClick={addClosedQuestion}>Add closed question</Button>
        {renderOpenQuestions(numOfOpenQuestionsArray)}
        <Button onClick={addOpenQuestion}>Add open question</Button>
        <Button>Submit Test</Button>
      </FormGroup>
    </div>
  );
};

export default CreateTest;
