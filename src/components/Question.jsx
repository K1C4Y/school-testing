import React from 'react';
import {FormCheck, FormControl} from 'react-bootstrap'

const Question = ({open,question,answers}) => {

	const renderAnswers = () => {
		var answersRendered = []
		for(const i in answers){
			answersRendered.push(
			<FormCheck type="checkbox" label={answers[i]} key={answers[i]}/>)
		}
		return answersRendered;
	}
				
	const renderForm = () =>{{
		return <FormControl as="textArea" rows="3"></FormControl>
	}} 

	return(
		<div className="answer">
			<p>{question}</p>
				{ open ? renderForm() : renderAnswers() }	
		</div>
	)
}

export default Question;
