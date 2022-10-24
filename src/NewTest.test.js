import {render, screen, fireEvent} from "@testing-library/react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import NewTest from "./NewTest";

describe("Compute total payable. Check the ui elements.", ()=>{
    it("has an input for bill",()=>{
        render(<NewTest />);
        const input = screen.getByTestId("bill");
        expect(input).toBeInTheDocument();
    });

    it("has a button to get discounted bill",()=>{
        render(<NewTest />);
        const btn = screen.getByTestId("get-total-pay");
        expect(btn).toBeInTheDocument();
    });
});

describe("Get the resultr for discounted bill.", ()=>{
    it("Dsplay result with 15% discount",()=>{
        render(<NewTest />);
        const input = screen.getByTestId("bill");
        findEvent.change(input, {target: {value: 200}});
        expect(input).toBeInTheDocument("200");

        const result = screen.getTestById("get-total-pay");
        fireEvent.click(result);
        expect(screen.getTestId("result-total-pay")).toHaveTextContent("170");
    });

    it("Dsplay result with 10% discount",()=>{
        render(<NewTest />);
        const input = screen.getByTestId("bill");
        findEvent.change(input, {target: {value: 100}});
        expect(input).toBeInTheDocument("100");

        const result = screen.getTestById("get-total-pay");
        fireEvent.click(result);
        expect(screen.getTestId("result-total-pay")).toHaveTextContent("90");
    });

    it("Dsplay result with 5% discount",()=>{
        render(<NewTest />);
        const input = screen.getByTestId("bill");
        findEvent.change(input, {target: {value: 50}});
        expect(input).toBeInTheDocument("50");

        const result = screen.getTestById("get-total-pay");
        fireEvent.click(result);
        expect(screen.getTestId("result-total-pay")).toHaveTextContent("47.50");
    });

    it("Dsplay result without discount",()=>{
        render(<NewTest />);
        const input = screen.getByTestId("bill");
        findEvent.change(input, {target: {value: 30}});
        expect(input).toBeInTheDocument("30");

        const result = screen.getTestById("get-total-pay");
        fireEvent.click(result);
        expect(screen.getTestId("result-total-pay")).toHaveTextContent("30");
    });

});