"use client";

import dynamic from "next/dynamic";

const TaskBoard = dynamic(
  () => import("@/components/TaskBoard"),
  {
    ssr: false,
  }
);

export default function ClientTaskBoard() {
  return <TaskBoard />;
}
