import React from "react";
import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./componets/Navigation";

function App(){
  return <BrowserRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
  </BrowserRouter>
}

export default App;