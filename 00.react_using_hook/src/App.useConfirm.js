import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import "./styles.css";
const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const doConfirm = () => console.log("Do Confirm~");
  const doAbort = () => console.log("Abort");
  const confirmTest = useConfirm("Are you sure?", doConfirm, doAbort);
  return (
    <div className="App">
      <button onClick={confirmTest}>Confirm Test</button>
    </div>
  );
};

export default App;
