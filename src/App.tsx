import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

interface Task {
  key: number;
  task: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([{key: 1, task: "Wash the dishes"}]);
  
  return (
    <div>
      <Navbar />
      <main className="px-8 pt-8 lg:pt-16 dark:bg-black dark:text-white min-h-screen lg:px-120">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <div className="mt-8"> 
          <Tasks tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </div>
  )
}

export default App
