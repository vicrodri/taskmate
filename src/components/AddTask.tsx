import React, { FC, useEffect, useState } from "react";
import { Task } from "../models/task";

interface AddTaskProps {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
  selectedTask: Task;
  setSelectedTask: (task: Task) => void;
}

export const AddTask: FC<AddTaskProps> = (props: AddTaskProps) => {
  const [taskName, setTaskName] = useState<string>("");

  const handleAdd = () => {
    const taskDate: Date = new Date();

    const newTask: Task = {
      id: "" + taskDate.getTime(),
      name: taskName,
      time: taskDate,
    };

    props.setTaskList([...props.taskList, newTask]);
    setTaskName("");
  };

  const handleEdit = () => {
    const updatedTaskList = props.taskList.map((item) =>
      item.id === props.selectedTask.id
        ? {
            id: props.selectedTask.id,
            name: taskName,
            time: new Date(),
          }
        : item
    );

    props.setTaskList(updatedTaskList);
    props.setSelectedTask({id: '', name: '', time: new Date()});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName !== '') {
        props.selectedTask.id === "" ? handleAdd() : handleEdit();
    } 
  };

  useEffect(() => {
    setTaskName(props.selectedTask.name);
  }, [props.selectedTask.name]);

  return (
    <section className="addTask">
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength={25}
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button type="submit" disabled={taskName === ''}>{props.selectedTask.id ? 'Update' : 'Add' }</button>
        
      </form>
    </section>
  );
};
