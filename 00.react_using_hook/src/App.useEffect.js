import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  // componentDidMount
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate");
  }, [number]);

  useEffect(() => {
    console.log("componentAllDidUpdate");
  });

  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
