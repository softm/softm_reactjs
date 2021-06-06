import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import "./styles.css";
const useFadein = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadein(1, 2);
  const fadeInP = useFadein(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <h1 {...fadeInP}>~ddfds ~~~sfsdf</h1>
    </div>
  );
};

export default App;
