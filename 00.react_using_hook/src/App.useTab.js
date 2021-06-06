import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const useTabs = (initTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
    currentIndex: currentIndex
  };
};

const App = () => {
  const { currentIndex, currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button
          style={{
            background: index === currentIndex ? "grey" : "white",
            border: index === currentIndex ? 1 : 0
          }}
          onClick={() => changeItem(index)}
        >
          {section.tab} / {currentIndex}
        </button>
      ))}
      {<div>{currentItem.content}</div>}
    </div>
  );
};

export default App;
