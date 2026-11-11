export interface Task {
  key: number;
  task: string;
}

export interface TaskProps{
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}