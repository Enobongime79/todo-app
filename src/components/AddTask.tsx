import { useState } from "react";
import type { TaskProps } from "./types";

function AddTask({ tasks, setTasks }: TaskProps) {
  const [task, setTask] = useState("");

  const addTask = () => {
    const taskValue = { key: tasks.length, task: task }
    setTasks([...tasks, taskValue]);
    setTask("");
  }
  
  return (
    <div className="flex flex-row item-center justify-center gap-2">
      <input
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Add a new task"
        className="border focus:outline-none px-4 w-full py-2 rounded"
      />
      <button onClick={addTask} className="px-4 py-2 text-white dark:bg-white dark:text-black bg-black hover:bg-gray-700 hover:cursor-pointer  dark:hover:bg-gray-400 rounded">Add</button>
    </div>
  );
}

export default AddTask;
