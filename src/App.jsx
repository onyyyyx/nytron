import { useState } from "react";
import Card from "./components/Card";
import Icon from "./components/Icon";

function App() {
  return (
    <>
      <header>
        <Icon />
      </header>
      <main>
        <Card name="GitHub" href="https://github.com/noctyris" />
        <Card name="Instagram" href="https://instagram.com/hoel__" />
      </main>
    </>
  );
}

export default App;
