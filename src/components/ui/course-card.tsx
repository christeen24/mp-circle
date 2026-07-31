import type { ICourseCardProps } from "@/interfaces/course";
import { ArrowRight, User2, CheckCircle2 } from "lucide-react";

export function CourseCard({ course }: ICourseCardProps) {
  const isCompleted = course.status === "completed";

  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md">
      {/* Banner */}
      <div className="relative mb-4 h-40 overflow-hidden rounded bg-muted">
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
              isCompleted
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {isCompleted ? "Completed" : "In Progress"}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-foreground text-base font-semibold mb-1">
        {course.title}
      </h3>

      {/* Instructor */}
      <p className="text-muted-foreground text-sm flex items-center gap-1 mb-6">
        <User2 className="h-4 w-4" />
        {course.instructor}
      </p>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-muted-foreground uppercase tracking-wider">
            Progress
          </span>

          <span
            className={
              isCompleted ? "text-secondary-foreground" : "text-primary-foreground"
            }
          >
            {course.progress}%
          </span>
        </div>

        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full ${
              isCompleted ? "bg-secondary" : "bg-primary"
            }`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
        <span className="text-xs text-muted-foreground">
          {isCompleted
            ? `Completed on ${course.completedOn}`
            : `Last accessed: ${course.lastAccessed}`}
        </span>

        {isCompleted ? (
          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
            <CheckCircle2 className="h-4 w-4" />
            Certificate
          </button>
        ) : (
          <button className="flex items-center gap-1 text-xs text-primary hover:underline">
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
