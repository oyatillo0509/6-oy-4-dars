import { useState } from "react";
import Main from "./components/Main";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {" "}
      <Menu />
      <Main />
    </div>
  );
}

export default App;
