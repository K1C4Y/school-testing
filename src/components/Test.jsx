import React ,{useState} from 'react';
import {FormGroup} from 'react-bootstrap';
import Question from './Question.jsx'
const Test = () => {
	const [testData, setTestData] = useState({name:"Ekonometria kolo", questions: [{open:true, question:"Podaj wzór na średnią artytmetyczną" },
			{open:false, question:"Jak podoba ci się pytanie", answers:["bardzo","nie bardzo", "trochę","super"]}]});

	const renderQuestions = (testData) =>{ 
		const questions = testData.questions.map( (quest) => (
			<Question 
				question={quest.question}
				key={quest.question}
				answers={quest.answers}
				open={quest.open}
			/>
		));
		return questions;
	}
	;
	return(
		<div id="test">
			<h1>{testData.name}</h1>
			<br/>
				<FormGroup>
					<Question />
					{renderQuestions(testData)}
				</FormGroup>
		</div>
	)
}

export default Test;
