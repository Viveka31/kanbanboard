import { useState } from "react";
import { useTasks } from "../context/TasksContext";

export default function TaskModal({ task, onClose }) {
  const { updateTask, deleteTask } = useTasks();
  const [desc, setDesc] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  function save() {
    updateTask(task.id, { description: desc, status });
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-gradient-to-br from-amber-100 to-rose-100
      rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-black mb-2">{task.title}</h2>

        <textarea
          className="w-full bg-white/60 p-2 rounded mb-3"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <select
          className="w-full bg-white/60 p-2 rounded mb-4"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <div className="flex justify-between">
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-600 font-bold"
          >
            🗑 Delete
          </button>

          <div className="flex gap-2">
            <button onClick={onClose}>Cancel</button>
            <button
              onClick={save}
              className="bg-teal-700 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
