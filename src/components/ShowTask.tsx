import React, { FC } from "react";
import { Task } from "../models/task";

interface ShowTaskProps {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
  selectedTask: Task;
  setSelectedTask: (task: Task) => void;
}

export const ShowTask: FC<ShowTaskProps> = (props: ShowTaskProps) => {
    const deleteTaskHandler =(taskId: String) => {
        const resultTaskList = props.taskList.filter(task => task.id !== taskId);
        props.setTaskList(resultTaskList);
    }
    
    const editTaskHandler =(taskId: String) => {
        const task = props.taskList.find(task => task.id === taskId);
        task ? props.setSelectedTask(task) : props.setSelectedTask(props.selectedTask);
    }

    return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{props.taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => props.setTaskList([])}>Clear All</button>
      </div>
      <ul>
        {props.taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time.toLocaleString("es-ES")}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={() => editTaskHandler(task.id)}></i>
            <i className="bi bi-trash" onClick={() => deleteTaskHandler(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
