import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Task, ColumnId } from "@/lib/types";
import SortableTaskItem from "./SortableTaskItem";

type DroppableColumnProps = {
  id: ColumnId;
  title: string;
  tasks: Task[];
};

export default function DroppableColumn({
  id,
  title,
  tasks,
}: DroppableColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  const columnStyle = `rounded-lg bg-gray-100 p-4 transition-colors min-h-[100px] ${
    isOver ? "bg-soft-blue/20" : ""
  }`;

  return (
    <div ref={setNodeRef} className={columnStyle}>
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={rectSortingStrategy}
        >
          {tasks.map((task) => (
            <SortableTaskItem
              key={task.id}
              task={task}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}
