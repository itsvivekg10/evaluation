import { useEffect, useState, UseState } from "react";
import "../component/Home.css";
function Home() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);
  function addBtn() {
    console.log("btn click");
    setTask([...task, input]);
    setInput("");
  }

  console.log(task);
  useEffect(() => {
    let storeTask = JSON.parse(localStorage.getItem("task")) || [];
    setTask(storeTask);
  }, []);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  return (
    <div>
      <h1>ADD YOUR TASK</h1>
      <input
        placeholder="Enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addBtn}>ADD</button>
      <h2>TASKS</h2>
      <div id="tasks">
        {" "}
        {task.map((ele, index) => (
          <div id="taskList" key={index}>
            <h1 key={index}>{ele}</h1>
            <button key={index}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
