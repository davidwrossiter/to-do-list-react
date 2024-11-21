import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lastClicked, setLastClicked] = useState(true);

  return (
    <>
      <div className="main-section">
        <div className="app-body">
          <h1>My to do list app</h1>
          <input type="text" id="taskInput" placeholder="Enter a new task" />
          <button
            id="increase count"
            onClick={() => {
              setCount(count + 1);
              setLastClicked(true);
            }}
          >
            Add Task
          </button>
          <button
            id="decrease count"
            onClick={() => {
              setCount(count - 1);
              setLastClicked(false);
            }}
          >
            Add Task
          </button>
          <ul id="taskList">{count}</ul>
          <p>
            {lastClicked ? "Clicked increased last" : "Clicked decrease last"}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
