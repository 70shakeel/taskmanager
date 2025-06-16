import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "@/lib/types";
import TaskItem from "./TaskItem";

type SortableTaskItemProps = {
  task: Task;
};

export default function SortableTaskItem({
  task,
}: SortableTaskItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    visibility: isDragging ? "hidden" : "visible",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-pointer"
    >
      <TaskItem task={task} />
    </div>
  );
}
