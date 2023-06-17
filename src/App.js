import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [click, setClick] = useState(false);

  return (
    <div className="App">
      <div className="task-1">
        <div>task 1</div>
        <button onClick={() => setClick(true)}>+</button>
      </div>
      {click ? <Task /> : ""}
    </div>
  );
}

export default App;
