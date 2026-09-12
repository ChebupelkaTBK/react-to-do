import { create } from "zustand";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskStore {
  tasks: Task[];
  addTask: (text: string) => void;
  taskTogle: (id: number) => void;
  removeTask: (id: number) => void;
}

export const useTasksStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text, done: false }],
    })),
  taskTogle: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        return task.id === id ? { ...task, done: !task.done } : task;
      }),
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => {
        return task.id !== id;
      }),
    })),
}));
