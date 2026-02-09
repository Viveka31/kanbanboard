import { useState } from "react";
import { useTasks } from "../context/TasksContext";

export default function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!title) return;

    addTask({
      id: Date.now().toString(),
      title,
      description,
      priority,
      deadline,
      status: "To Do",
      tags: ["general"],
    });

    setTitle("");
    setDescription("");
    setDeadline("");
  }

  return (
    <form
      onSubmit={submit}
      className="max-w-2xl mx-auto bg-gradient-to-br from-teal-300 to-sky-300
      p-5 rounded-2xl shadow-xl"
    >
      <input
        className="w-full p-2 rounded-lg bg-teal-100 mb-2"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-2 rounded-lg bg-sky-100 mb-2"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex gap-2 mb-2">
        <select
          className="flex-1 bg-lime-100 p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          className="flex-1 bg-amber-100 p-2 rounded"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <button className="bg-teal-800 text-white px-4 py-2 rounded-lg">
        ➕ Add Task
      </button>
    </form>
  );
}
