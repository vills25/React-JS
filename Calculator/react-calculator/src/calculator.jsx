import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const appendValue = (value) => {
    setResult((prev) => prev + value);
  };

  const clearResult = () => {
    setResult("");
  };

  const deleteChar = () => {
    setResult((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} disabled />
      <div className="buttons">
        <button onClick={clearResult}>C</button>
        <button onClick={deleteChar}>DEL</button>
        <button onClick={() => appendValue("%")}>%</button>
        <button onClick={() => appendValue("/")}>/</button>
        <button onClick={() => appendValue("7")}>7</button>
        <button onClick={() => appendValue("8")}>8</button>
        <button onClick={() => appendValue("9")}>9</button>
        <button onClick={() => appendValue("*")}>*</button>
        <button onClick={() => appendValue("4")}>4</button>
        <button onClick={() => appendValue("5")}>5</button>
        <button onClick={() => appendValue("6")}>6</button>
        <button onClick={() => appendValue("-")}>-</button>
        <button onClick={() => appendValue("1")}>1</button>
        <button onClick={() => appendValue("2")}>2</button>
        <button onClick={() => appendValue("3")}>3</button>
        <button onClick={() => appendValue("+")}>+</button>
        <button onClick={() => appendValue("0")}>0</button>
        <button onClick={() => appendValue(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
