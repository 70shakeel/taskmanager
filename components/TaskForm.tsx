"use client";

import { useState, FormEvent } from "react";

interface TaskFormProps {
  onAddTask: (
    title: string,
    description: string
  ) => void;
}

export default function TaskForm({
  onAddTask,
}: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-lg bg-white p-6 shadow"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Add New Task
      </h2>
      <div className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-soft-blue focus:ring-soft-blue sm:text-sm"
            placeholder="e.g., Finalize report"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description (Optional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-soft-blue focus:ring-soft-blue sm:text-sm"
            placeholder="e.g., Compile data and write summary"
          ></textarea>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full min-h-[48px] justify-center rounded-md border border-transparent bg-soft-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
