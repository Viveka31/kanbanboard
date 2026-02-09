import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Column from "./Column";
import TaskForm from "./TaskForm";
import { useTasks } from "../context/TasksContext";

export default function Board() {
  const { updateTask } = useTasks();

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
  );

  function handleDragEnd({ active, over }) {
    if (!over) return;
    updateTask(active.id, { status: over.id });
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <TaskForm />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
        <Column title="To Do" />
        <Column title="In Progress" />
        <Column title="Done" />
      </div>
    </DndContext>
  );
}
