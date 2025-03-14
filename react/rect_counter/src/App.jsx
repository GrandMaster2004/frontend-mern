import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function negative() {
    setCount(count - 1);
  }

  function positive() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={negative}>-</button>
        <button>{count}</button>
        <button onClick={positive}>+</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
