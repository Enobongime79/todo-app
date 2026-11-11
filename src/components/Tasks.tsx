import { IconX } from "@tabler/icons-react";
import type { TaskProps } from "./types";

function Tasks({ tasks, setTasks}: TaskProps) {

  const deleteTask = (e) => {
    const key = e.currentTarget.dataset.key;
    const filtered = tasks.filter(obj => obj.key != key);
    setTasks(filtered);
    console.log(key);
    console.log(tasks);
    console.log(filtered);
  }

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <div className="border flex flex-row justify-between items-center rounded px-4 py-2" key={task.key}>
          <p>{task.task}</p>
          <IconX data-key={task.key} onClick={deleteTask} className="h-4 hover:cursor-pointer" />
        </div>
      ))}
    </div>
  );
}

export default Tasks;
