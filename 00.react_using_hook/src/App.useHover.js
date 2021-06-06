import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import "./styles.css";
const useHover = (onOver) => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onOver);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onOver);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
