import { TaskData } from "./types";

export const initialData: TaskData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Project Setup",
      description:
        "Initialize Next.js 15 and install core dependencies.",
    },
    "task-2": {
      id: "task-2",
      title: "UI Components",
      description:
        "Build responsive TaskBoard, TaskForm, and Navbar components.",
    },
    "task-3": {
      id: "task-3",
      title: "Drag & Drop",
      description:
        "Implement drag and drop with @dnd-kit for task sorting.",
    },
    "task-4": {
      id: "task-4",
      title: "State Management",
      description:
        "Use use-local-storage-state for persistent state.",
    },
    "task-5": {
      id: "task-5",
      title: "Styling with Tailwind",
      description:
        "Apply Tailwind CSS v4 for a modern, responsive UI.",
    },
    "task-6": {
      id: "task-6",
      title: "Dynamic Imports",
      description:
        "Fix SSR issues by moving dynamic imports to a client component.",
    },
    "task-7": {
      id: "task-7",
      title: "About Page",
      description:
        "Create an about page with project details and dependencies.",
    },
    "task-8": {
      id: "task-8",
      title: "Final Polish",
      description:
        "Review and polish all features for deployment.",
    },
  },
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      taskIds: ["task-8"],
    },
    "in-progress": {
      id: "in-progress",
      title: "In Progress",
      taskIds: ["task-7"],
    },
    done: {
      id: "done",
      title: "Done",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
      ],
    },
  },
  columnOrder: ["todo", "in-progress", "done"],
};
