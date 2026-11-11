export interface Task {
  key: string;
  task: string;
}

export interface TaskProps{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}