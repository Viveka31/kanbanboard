import { useDroppable } from "@dnd-kit/core";
import { useTasks } from "../context/TasksContext";
import TaskCard from "./TaskCard";

export default function Column({ title }) {
  const { tasks } = useTasks();
  const { setNodeRef } = useDroppable({ id: title });

  return (
    <div
      ref={setNodeRef}
      className="rounded-3xl p-4 min-h-[420px]
      bg-gradient-to-br from-white/40 to-white/20
      backdrop-blur-xl border border-white/40"
    >
      <h2 className="text-xl font-bold text-teal-800 mb-4">{title}</h2>

      {tasks
        .filter((t) => t.status === title)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}
