import {useState} from "react";

const NewTest = () => {
        const [bill, setBill] = useState(0);
        const [result, setResult] = useState(0);

        const handleBillChange = (evt) => {
            const value = evt.target.value;
            setBill(Number(value));
        };

        const handleGetTotalPay = () => {
            if(bill>199){
                setResult(bill - bill*0.15);
            }else if (bill>99 && bill<=199){
                setResult(bill - bill*0.10);
            }else if (bill>49 && bill<=99){
                setResult(bill - bill*0.05);
            }else{
                setResult(bill);
            }
        };

        return(
            <>
                <label htmlFor="bill">Enter Bill: </label>
                <input 
                    type = "text"
                    onChange={handleBillChange}
                    data-testid = "bill"
                    name = "bill"
                />
                <br />
                <button onClick={handleGetTotalPay}
                    data-testid= "get-total-pay">

                        Get Total Pay
                </button>
                <br />
                <h2 data-testid = "result-total-pay">Result: {result}</h2>
            </>
        )
};

export default NewTest;