import React, { Fragment } from "react";
import { Inputs } from "./components/Inputs";
import { Interest } from "./components/Interest";

const App: React.FC = () => (
  <Fragment>
    <h1>interest calculator</h1>
    <Inputs />
    <Interest />
  </Fragment>
);

export default App;
