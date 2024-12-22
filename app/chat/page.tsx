"use client";

import { TaskadeWidget } from "@/components/chat/taskade-widget";

export default function ChatPage() {
  return (
    <main className="flex flex-col h-screen bg-background">
      <TaskadeWidget />
    </main>
  );
}