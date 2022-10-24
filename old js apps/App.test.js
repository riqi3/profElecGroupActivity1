import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import AveGrade from './App';

describe("Compute average grade. Check the UI elements.",()=>{

	it("has an input for name",()=>{
		render(<AveGrade/>);
		const input = screen.getByTestId("name"); 
		expect(input).toBeInTheDocument();
	});

	it("has an input for quiz1",()=>{
		render(<AveGrade/>);
		const input2 = screen.getByTestId("quiz1");
		expect(input2).toBeInTheDocument();
	});

	it("has an input for quiz2",()=>{
		render(<AveGrade/>);
		const input3 = screen.getByTestId("quiz2");
		expect(input3).toBeInTheDocument();
	});

	it("has a button to get the average result",()=>{
		const { container } = render(<AveGrade/>);
		const btn = container.querySelector("button");
		expect(btn).toBeInTheDocument();
	});

});

describe("Check for the result.", ()=>{
	it("has value for name, quiz1, quiz2 and result", () => {		
		render(<AveGrade/>);
	const input1 = screen.getAllByTestId("name");
	fireEvent.change(input,{target:{value:"Earl"}});
	expect(input1.value).toBe("Earl");

	const input2 = screen.getAllByTestId("quiz1");
	fireEvent.change(input2, {target: {value: "100"}});
	expect(input2.value).toBe("100");
	
	const input3 = screen.getAllByTestId("quiz2");
	fireEvent.change(input3, {target: {value: "50"}});
	expect(input3.value).toBe("50");

	const btn = screen.getAllByTestId("set-result");
	fireEvent.click(btn);
	expect(screen.getAllByTextId("set-result")).toHaveTextContent ("Passed") 
	});
});
