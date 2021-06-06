import { StrictMode } from "react";
import ReactDOM from "react-dom";

//import App from "./App";
//import App from "./App.useInput";
// import App from "./App.useTab";
//import App from "./App.useEffect";
//import App from "./App.useTitle";
//import App from "./App.useClick";
//import App from "./App.useHover";
//import App from "./App.useConfirm";
//import App from "./App.usePreventLeave";
// import App from "./App.useBeforeLeave";
// import App from "./App.useFadein";
//import App from "./App.useNetwork";
// import App from "./App.useScroll";
//import App from "./App.useFullscreen";
//import App from "./App.useNotifcation";

import App from "./App.useAxios";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
