import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const PeoplePage = React.lazy(() =>
  import("./pages/PeoplePage").then(({ PeoplePage }) => ({
    default: PeoplePage
  }))
);
const PeopleOnePage = React.lazy(() =>
  import("./pages/PeopleOnePage").then(({ PeopleOnePage }) => ({
    default: PeopleOnePage
  }))
);

const App: React.FC = () => (
  <BrowserRouter>
    <React.Suspense fallback="Loading...">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="people" />} />
        <Route exact path="/people" component={PeoplePage} />
        <Route path="/people/:index" component={PeopleOnePage} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default App;
