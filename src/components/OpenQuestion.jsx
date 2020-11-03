import React, {Component} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';

class OpenQuestion extends Component{
	render(){

		return (
			<div className='OpenQuestion'>
				<FormGroup>
					<FormLabel>Question</FormLabel>	
						<FormControl type='textarea' placeholder='Enter Question'/>
				</FormGroup>
			</div>	
		);
	}
}


export default OpenQuestion;
