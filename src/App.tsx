import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { sum } from "@utils/sum";

const A = () => (
  <div>
    <h1>I'm A component</h1>
    <Link to="/b">Go to B component</Link>
    <p>Sum: {sum(1, 2)}</p>
  </div>
);

const B = () => (
  <div>
    <h1>I'm B component</h1>
    <Link to="/">Go to A component</Link>
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={A} />
      <Route path="/b" component={B} />
    </Switch>
  </BrowserRouter>
);

export default App;
