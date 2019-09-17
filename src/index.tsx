import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>frame.kitchen</h1>
      <h2>coming soon</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
