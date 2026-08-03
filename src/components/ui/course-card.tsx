import type { ICourseCardProps } from "@/interfaces/course"
import { ArrowRight, User2 } from "lucide-react"

export function CourseCard({ course }: ICourseCardProps) {
  const isCompleted = course.status === "completed"

  return (
    <div className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md">
      {/* Banner */}
      <div className="relative mb-4 h-40 overflow-hidden rounded bg-muted">
        <img
          src={course.image}
          alt={course.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute top-3 right-3 z-10">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
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
      <h3 className="mb-1 text-base font-semibold text-foreground">
        {course.title}
      </h3>

      {/* Instructor */}
      <p className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <User2 className="h-4 w-4" />
        {course.instructor}
      </p>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold">
          <span className="tracking-wider text-muted-foreground uppercase">
            Progress
          </span>

          <span
            className={
              isCompleted
                ? "text-secondary-foreground"
                : "text-primary-foreground"
            }
          >
            {course.progress}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full ${isCompleted ? "bg-secondary" : "bg-primary"}`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-muted-foreground">
          {isCompleted
            ? `Completed on ${course.completedOn}`
            : `Last accessed: ${course.lastAccessed}`}
        </span>

        {isCompleted ? (
          <></>
        ) : (
          <button className="flex items-center gap-1 text-xs text-primary hover:underline">
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
