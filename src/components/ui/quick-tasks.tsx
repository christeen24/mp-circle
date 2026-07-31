import { useState } from "react";
import { Plus } from "lucide-react";

export function QuickTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, label: "Submit Math Assignment", done: false },
    { id: 2, label: "Email Prof. Sarah", done: false },
    { id: 3, label: "Review Weekly Quiz", done: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-foreground font-semibold text-lg mb-4">
        Quick Tasks
      </h3>

      <div className="space-y-3">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex items-center gap-3 p-3 bg-muted rounded-lg cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="rounded text-primary focus:ring-primary h-4 w-4 border-border"
            />

            <span
              className={`text-sm transition-colors ${
                task.done
                  ? "text-muted-foreground line-through"
                  : "text-foreground group-hover:text-primary"
              }`}
            >
              {task.label}
            </span>
          </label>
        ))}
      </div>

      <button className="flex items-center gap-2 mt-4 text-primary text-sm font-bold">
        <Plus className="h-4 w-4" />
        Add New Task
      </button>
    </div>
  );
}
