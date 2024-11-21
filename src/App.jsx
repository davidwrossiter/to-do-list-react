import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-section">
        <div className="app-body">
          <h1>My to do list app</h1>
          <input type="text" id="taskInput" placeholder="Enter a new task" />
          <button id="increase count" onClick={() => setCount(count + 1)}>
            Add Task
          </button>
          <button id="decrease count" onClick={() => setCount(count - 1)}>
            Add Task
          </button>
          <ul id="taskList">{count}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
