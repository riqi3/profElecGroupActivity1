import { useState } from 'react'; // hook

const Calculator = () => {

	const [firstNo, setFirstNo] = useState(0);
	const [secondNo, setSecondNo] = useState(0);
	const [result, setResult] = useState(0);

	const handleFnoChange = (evt) => {
		const value = evt.target.value;
		setFirstNo(Number(value));
	}

	const handleSnoChange = (evt) => {
		const value = evt.target.value;
		setSecondNo(Number(value));
	}

	const add = () => {
		setResult(firstNo+secondNo);
	}

	const subtract = () => {
		setResult(firstNo-secondNo);
	}

	const divide = () => {
		setResult(firstNo/secondNo);
	}

	const multiply = () => {
		setResult(firstNo*secondNo);
	}			

	return(
		<>
			<h1>Calculator</h1>

			<label htmlFor="fno">Enter First No</label>
			<input 
				aria-label="fno" 
				// id="fno" 
				name="fno" 
				onChange={handleFnoChange} 
				// type="text"
				data-testid="fno"
			/>
			<br/>

			<label htmlFor="sno">Enter Second No</label>
			<input 
				aria-label="sno" 
				// id="sno" 
				name="sno" 
				onChange={handleSnoChange} 
				// type="text"
				data-testid="sno"
			/>
			<br/>

			<button 
				onClick={add}
				data-testid="btn-add"
			>
				Add
			</button>

			<button 
				onClick={subtract}
				data-testid="btn-subtract"
			>
				Subtract
			</button>

			<button 
				onClick={divide}
				data-testid="btn-divide"
			>
				Divide
			</button>

			<button 
				onClick={multiply}
				data-testid="btn-multiply"
			>
				Multiply
			</button>

			<br />
			<h2 data-testid="result-of-operation">Result: {result}</h2>
		</>
	);
};

export default Calculator;