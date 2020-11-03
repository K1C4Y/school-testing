import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';

class CQAnswer extends Component{
  constructor(props) {
		super(props);
		this.delAns = this.delAns.bind(this)
	};

	delAns(){
		this.props.delAnsw();
	}
	render(){

		return (
			<div className='CQAnswer'>
				<FormLabel>Answer {this.props.num} text:</FormLabel>	
				<FormControl type='textarea' placeholder='Answer'/>
				<FormControl type='checkbox' label='Is correct'/>
					<Button onClick={this.delAns} value={this.props.num}>Delete answer</Button>
			</div>	
		);
	}
}


export default CQAnswer;
