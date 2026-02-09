import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { useTasks } from "../context/TasksContext";
import TaskModal from "./TaskModal";

export default function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: task.id });

  const [open, setOpen] = useState(false);

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  const priorityColor = {
    Low: "border-l-lime-500",
    Medium: "border-l-amber-500",
    High: "border-l-rose-500",
  }[task.priority || "Medium"];

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={`bg-gradient-to-br from-sky-100 to-teal-100
        p-3 rounded-xl mb-3 shadow-md border-l-4 ${priorityColor}`}
      >
        {/* TITLE */}
        <h3 className="font-bold text-teal-900 mb-1">{task.title}</h3>

        {/* META */}
        <p className="text-xs text-teal-700 mb-2">
          {task.priority || "Medium"} priority
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setOpen(true)}
            className="text-sm text-teal-800 font-semibold hover:underline"
          >
            👁 View
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-sm text-rose-600 font-semibold hover:underline"
          >
            🗑 Delete
          </button>
        </div>
      </div>

      {open && <TaskModal task={task} onClose={() => setOpen(false)} />}
    </>
  );
}
