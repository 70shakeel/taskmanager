import { Task } from "@/lib/types";
import { cva } from "class-variance-authority";

const taskItemVariants = cva(
  "rounded-md bg-white p-4 shadow-sm transition-shadow",
  {
    variants: {
      isOverlay: {
        true: "shadow-lg ring-2 ring-soft-blue",
      },
    },
  }
);

type TaskItemProps = {
  task: Task;
  isOverlay?: boolean;
};

export default function TaskItem({
  task,
  isOverlay,
}: TaskItemProps) {
  return (
    <div
      className={taskItemVariants({ isOverlay })}
    >
      <h4 className="font-semibold">
        {task.title}
      </h4>
      <p className="mt-1 text-sm text-gray-600">
        {task.description}
      </p>
    </div>
  );
}
