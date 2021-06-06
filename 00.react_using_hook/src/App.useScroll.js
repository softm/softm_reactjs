import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import "./styles.css";
const useScroll = () => {
  const [status, setStatus] = useState({
    x: 0,
    y: 0
  });
  const onScroll = (event) => {
    console.log("y", window.scrollY, "x", window.scrollX);
    setStatus({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return status;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

export default App;
