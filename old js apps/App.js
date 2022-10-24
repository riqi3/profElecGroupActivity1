//Filosopo, Earl Michael M.

import { useState } from 'react';

const AveGrade = () => {
	const [name, setName] = useState();
	const [quiz1, setQuiz1] = useState(0);
	const [quiz2, setQuiz2] = useState(0);
	const [result, setResult] = useState(0);
	const [result2, setResult2] = useState(0);

	const handleNameChange = (evt) => {
		const value = evt.target.value;
		setName(value);
	}

	const handleQuiz1Change = (evt) => {
		const value = evt.target.value;
		setQuiz1(Number(value));
	}

	const handleQuiz2Change = (evt) => {
		const value = evt.target.value;
		setQuiz2(Number(value));
	}

	const handleResult = () => {
		setResult((quiz1+quiz2)/2);
		if(result <= 50) {
			setResult2("Passed");
		}else {
			setResult2("Failed");
		}
	}

	return(
		<>
			<label htmlFor="name">Name</label>
			<input 
				type="text"
				onChange={handleNameChange}
				data-testid="name"
				name="name"
			/>
			<br/>
			
			<label htmlFor="quiz1">Quiz1</label>
			<input 
				type="text"
				onChange={handleQuiz1Change}
				data-testid="quiz1"
				name="quiz1"
			/>
			<br/>

			<label htmlFor="quiz2">Quiz2</label>
			<input 
				type="text"
				onChange={handleQuiz2Change}
				data-testid="quiz2"
				name="quiz2"
			/>
			<br/>

			<button
				onClick={handleResult} 
				data-testid="set-result"
			>
				RESULT
			</button>
			<br/>
			<h2 data-testid="name">NAME: {name}</h2>
			<h2 data-testid="set-result">RESULT: {result2}</h2>

		</>
	)
};
export default AveGrade;