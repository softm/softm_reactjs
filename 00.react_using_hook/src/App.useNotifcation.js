import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import "./styles.css";
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permisssion) => {
        if (permisssion === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
    return;
  };
  return fireNotif;
  // useEffect(()=>)
  // return { element, triggerFull, exitFull };
};

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi", {
    body: "body ~~~~~~~~"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
