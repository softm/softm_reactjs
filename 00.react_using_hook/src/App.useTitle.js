import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./styles.css";
const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
const App = () => {
  const updateTitle = useTitle("Loading...");
  setTimeout(() => {
    updateTitle("test");
  }, 1000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
