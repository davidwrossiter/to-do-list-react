import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lastClicked, setLastClicked] = useState(true);
  const [increases, increase] = useState(0);
  const [decreases, decrease] = useState(0);
  const [presses, press] = useState(0);

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
              increase(increases + 1);
              press(presses + 1)
            }}
          >
            Add Task
          </button>
          <button
            id="decrease count"
            onClick={() => {
              setCount(count - 1);
              setLastClicked(false);
              decrease(decreases + 1);
              press(presses + 1)
            }}
          >
            Add Task
          </button>
          <ul id="taskList">{count}</ul>
          <p>
            {lastClicked ? "Clicked increased last" : "Clicked decrease last"}
          </p>
          <p>{increases}</p>
          <p>{decreases}</p>
        </div>
      </div>
    </>
  );
}

export default App;
