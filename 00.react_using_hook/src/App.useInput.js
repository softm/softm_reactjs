import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";
import { useInput } from "./hooks";

const App = () => {
  const maxLen = (value) => {
    return value.length <= 10;
  };
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
