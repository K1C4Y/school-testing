import React from "react";
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";

const OpenQuestion = ({
  num,
  setNumOfOpenQuestionsArray,
  numOfOpenQuestionsArray,
}) => {
  const deleteOpenQuestionHendeler = () => {
    setNumOfOpenQuestionsArray(
      numOfOpenQuestionsArray.filter((number) => number !== num)
    );
  };

  return (
    <div className="OpenQuestion">
      <FormLabel>Question</FormLabel>
      <FormControl type="textarea" placeholder="Enter Question" />
      <Button onClick={deleteOpenQuestionHendeler}>Delete Question</Button>
    </div>
  );
};

export default OpenQuestion;
