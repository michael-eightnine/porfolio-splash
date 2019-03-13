import React from "react";
import { ContentBlock, Logo } from "./components";
import "./scss/app.scss";

console.log(
  "%c👋 Hello dev console user! If you're a fan of what you've seen on this site then reach out to me at michael@eightnine.co! I'd love to hear from you!",
  "color: #3900ff; font-size: 13px"
);

const App = () => (
  <React.Fragment>
    <div className="app">
      <Logo />
      <ContentBlock />
    </div>
  </React.Fragment>
);

export default App;
