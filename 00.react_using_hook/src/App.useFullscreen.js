import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import "./styles.css";
const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullScreen) {
        element.current.msRequestFullScreen();
      }
      runCb(true);
    }
  };

  const exitFull = () => {
    if (element.current.exitFullscreen) {
      element.current.exitFullscreen();
    } else if (element.current.mozCancelFullscreen) {
      element.current.mozCancelFullscreen();
    } else if (element.current.webkitExitFullscreen) {
      element.current.webkitExitFullscreen();
    } else if (element.current.msExitFullscreen) {
      element.current.msExitFullscreen();
    }
    runCb(false);
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const callback = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(callback);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://gist.github.com/softm/48f32d5f08e15b9de2b7e296e310e12c/raw/f9c10767dece0e4722efa82221e7b4bc3ae8c22f/redux-saga-modal.png" />
        <button onClick={exitFull}>Exit fullScreen</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
};

export default App;
