import React from "react";
import { ContentBlock, Logo } from "./components";
import "./scss/app.scss";

const App = () => (
  <div className="app">
    <Logo />
    <ContentBlock />
  </div>
);

export default App;
