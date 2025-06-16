export interface Task {
  id: string;
  title: string;
  description?: string;
}

export type ColumnId =
  | "todo"
  | "in-progress"
  | "done";

export interface Column {
  id: ColumnId;
  title: string;
  taskIds: string[];
}

export interface TaskData {
  tasks: Record<string, Task>;
  columns: Record<ColumnId, Column>;
  columnOrder: ColumnId[];
}
