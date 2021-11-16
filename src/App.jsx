import React from "react";
import Routers from "./routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Mainindex from "./components/Main/Mainindex";

const App = () => {
  const history = createBrowserHistory();
  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>
  );
};

export default App;
