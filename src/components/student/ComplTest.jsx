import React, { useState } from "react";
import Question from './Question.jsx';
import FormGroup from 'react-bootstrap/FormGroup';
const ComplTest = () => {
  const [testData, setTestData] = useState({
    name: "Ekonometria kolo",
    questions: [
      { open: true, question: "Podaj wzór na średnią artytmetyczną" },
      {
        open: false,
        question: "Jak podoba ci się pytanie",
        answers: ["bardzo", "nie bardzo", "trochę", "super"],
      },
    ],
  });

  const renderQuestions = (testData) => {
    const questions = testData.questions.map((quest) => (
      <Question
        question={quest.question}
        key={quest.question}
        answers={quest.answers}
        open={quest.open}
      />
    ));
    return questions;
  };
  return (
    <div id="complTest">
      <h1>{testData.name}</h1>
      <br />
      <FormGroup>
        <Question />
        {renderQuestions(testData)}
      </FormGroup>
    </div>
  );
};

export default ComplTest;
