import { useState } from "react";
import type { TaskProps } from "./types";


function AddTask({ tasks, setTasks }: TaskProps) {
  const [task, setTask] = useState("");

  const addTask = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!task.trim()) return;

    const taskValue = {
      key: crypto.randomUUID(),
      task: task.trim(),
    };

    const immediateStore = [...tasks, taskValue]

    setTasks([...tasks, taskValue]);
    localStorage.setItem("tasks", JSON.stringify(immediateStore));
    setTask("");

    const store = JSON.parse(localStorage.getItem("tasks"));
    console.log(store)
  };

  return (
    <form
      onSubmit={addTask}
      className="flex flex-row items-center justify-center gap-2"
    >
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="border focus:outline-none px-4 w-full py-2 rounded"
      />

      <button
        type="submit"
        className="px-4 py-2 text-white bg-black dark:bg-white dark:text-black rounded"
      >
        Add
      </button>
    </form>
  );
}

export default AddTask;
