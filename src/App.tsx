import React, { Fragment } from "react";
import { Inputs } from "./components/Inputs";
import { Interest } from "./components/Interest";

const App: React.FC = () => (
  <Fragment>
    <Inputs />
    <Interest />
  </Fragment>
);

export default App;
