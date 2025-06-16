"use client";

import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import useLocalStorageState from "use-local-storage-state";
import { initialData } from "@/lib/initial-data";
import {
  TaskData,
  ColumnId,
  Task,
} from "@/lib/types";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import DroppableColumn from "./DroppableColumn";

export default function TaskBoard() {
  const [data, setData] =
    useLocalStorageState<TaskData>(
      "task-manager-data",
      {
        defaultValue: initialData,
      }
    );
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] =
    useState<ColumnId>("todo");
  const [activeTask, setActiveTask] =
    useState<Task | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (
    event: DragStartEvent
  ) => {
    const { active } = event;
    const task = Object.values(data.tasks).find(
      (t) => t.id === active.id
    );
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) return;

    const activeColumnId =
      findColumnOfTask(activeId);
    const overColumnId =
      data.columns[overId as ColumnId] !==
      undefined
        ? (overId as ColumnId)
        : findColumnOfTask(overId);

    if (!activeColumnId || !overColumnId) return;

    setData((prev) => {
      const newData = { ...prev };
      const activeColumn =
        newData.columns[activeColumnId];
      const overColumn =
        newData.columns[overColumnId];

      if (activeColumnId === overColumnId) {
        const oldIndex =
          activeColumn.taskIds.indexOf(activeId);
        const newIndex =
          overColumn.taskIds.indexOf(overId);
        activeColumn.taskIds = arrayMove(
          activeColumn.taskIds,
          oldIndex,
          newIndex
        );
      } else {
        const overTaskIndex =
          overColumn.taskIds.indexOf(overId);
        const newIndex =
          overTaskIndex >= 0
            ? overTaskIndex
            : overColumn.taskIds.length;

        activeColumn.taskIds =
          activeColumn.taskIds.filter(
            (id) => id !== activeId
          );
        overColumn.taskIds.splice(
          newIndex,
          0,
          activeId
        );
      }
      return newData;
    });
  };

  const findColumnOfTask = (
    taskId: string
  ): ColumnId | undefined => {
    return data.columnOrder.find((columnId) =>
      data.columns[columnId].taskIds.includes(
        taskId
      )
    );
  };

  const addTask = (
    title: string,
    description: string
  ) => {
    const newTaskId = `task-${Date.now()}`;
    const newTask: Task = {
      id: newTaskId,
      title,
      description,
    };

    setData((prevData) => ({
      ...prevData,
      tasks: {
        ...prevData.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...prevData.columns,
        todo: {
          ...prevData.columns["todo"],
          taskIds: [
            ...prevData.columns["todo"].taskIds,
            newTaskId,
          ],
        },
      },
    }));
  };

  const clearAllTasks = () => {
    setData(initialData);
  };

  if (!isClient) {
    return null;
  }

  const getTasksForColumn = (
    columnId: ColumnId
  ): Task[] => {
    const column = data.columns[columnId];
    if (!column) return [];
    return column.taskIds
      .map((taskId) => data.tasks[taskId])
      .filter(Boolean);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-4 md:flex-row md:items-start">
          <div className="w-full md:max-w-md">
            <TaskForm onAddTask={addTask} />
          </div>
          <button
            onClick={clearAllTasks}
            className="w-full rounded-md bg-red-500 px-4 py-2 text-white shadow-sm hover:bg-red-600 min-h-[48px] md:w-auto cursor-pointer"
          >
            Clear All Tasks
          </button>
        </div>

        {/* Mobile Tabs */}
        <div className="mb-4 md:hidden">
          <div className="border-b border-gray-200">
            <nav
              className="-mb-px flex space-x-8"
              aria-label="Tabs"
            >
              {data.columnOrder.map(
                (columnId) => (
                  <button
                    key={columnId}
                    onClick={() =>
                      setActiveTab(columnId)
                    }
                    className={`${
                      activeTab === columnId
                        ? "border-soft-blue text-soft-blue"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                  >
                    {data.columns[columnId].title}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {data.columnOrder.map((columnId) => (
            <DroppableColumn
              key={columnId}
              id={columnId}
              title={data.columns[columnId].title}
              tasks={getTasksForColumn(columnId)}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <DroppableColumn
            id={activeTab}
            title={data.columns[activeTab].title}
            tasks={getTasksForColumn(activeTab)}
          />
        </div>
      </div>
      <DragOverlay
        dropAnimation={{
          duration: 0,
        }}
        wrapperElement="div"
      >
        {activeTask ? (
          <TaskItem task={activeTask} isOverlay />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
