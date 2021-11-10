import React from "react";
import Routers from "./routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const App = () => {
  const history = createBrowserHistory()
  return (
    <>
      <Router history={history}>
        <Routers />
      </Router>
    </>
  );
};

export default App;
