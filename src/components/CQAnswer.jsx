import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';


const CQAnswer = ({num, delAnsw}) =>{


const delAns = (e) =>{
		delAnsw(e);
	}

	return (
		<div className='CQAnswer'>
			<FormLabel>Answer text:</FormLabel>	
			<FormControl type='textarea' placeholder='Answer'/>
			<FormControl type='checkbox' label='Is correct'/>
				<Button onClick={(e) => delAns(e)} value={num}>Delete answer</Button>
		</div>	
	)
}


export default CQAnswer;
