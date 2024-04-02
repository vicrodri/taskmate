import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";

import { Task } from "./models/task";

function App() {
  const [taskList, setTaskList] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasklist")!) || []
  );
  const [selectedTask, setSelectedTask] = useState<Task>({
    id: "",
    name: "",
    time: new Date(),
  });

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  },[taskList]);

  return (
    <div className="App">
      <Header></Header>
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      ></AddTask>
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      ></ShowTask>
    </div>
  );
}
export default App;
