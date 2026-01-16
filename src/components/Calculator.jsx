import React, { useState } from "react";
import History from "./History";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]); // stays only until refresh

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {

        const result = eval(input);
        const record = `${input} = ${result}`;

        setHistory([...history, record]); // store in memory only

        setInput(result.toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div>
          <input type="text" value={input} readOnly />
          <div className="buttons">
            {["(",")","%","C","7", "8", "9","/", "4", "5", "6","*",  "1", "2", "3","-", "0", "." ,"=", "+"]
              .map((btn) => (
                <button key={btn} onClick={() => handleClick(btn)}>
                  {btn}
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="hist"><History history={history} /></div>
    </div>
  );
};

export default Calculator;
