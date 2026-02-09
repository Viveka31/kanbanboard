import { createContext, useContext, useEffect, useState } from "react";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("kanban-tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((p) => [...p, task]);

  const updateTask = (id, updates) =>
    setTasks((p) => p.map((t) => (t.id === id ? { ...t, ...updates } : t)));

  const deleteTask = (id) =>
    setTasks((p) => p.filter((t) => t.id !== id));

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
