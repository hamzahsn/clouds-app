import React from "react";
import CloudList from "./containers/CloudList/CloudList";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CloudList />
    </div>
  );
}

export default App;
