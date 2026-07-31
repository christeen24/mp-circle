import { ArrowRight, User } from "lucide-react";

interface DashboardCourseCardProps {
  title: string;
  code: string;
  instructor: string;
  progress: number;
  image: string;
  accent?: "primary" | "secondary";
}

export function DashboardCourseCard({
  title,
  code,
  instructor,
  progress,
  image,
  accent = "primary",
}: DashboardCourseCardProps) {
  const accentStyles =
    accent === "secondary"
      ? {
          badge: "bg-secondary text-secondary-foreground",
          bar: "bg-secondary",
        }
      : {
          badge: "bg-primary text-primary-foreground",
          bar: "bg-primary",
        };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden group cursor-pointer hover:shadow-md transition-all">
      {/* Banner */}
      <div className="h-32 bg-muted relative">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

        <span className="absolute bottom-3 left-4 text-card-foreground font-semibold text-sm">
          {title}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span
            className={`px-2 py-1 text-[10px] font-bold rounded uppercase tracking-wide ${accentStyles.badge}`}
          >
            {code}
          </span>

          <span className="text-muted-foreground text-xs">
            {progress}% Complete
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${accentStyles.bar}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between text-muted-foreground text-sm">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {instructor}
          </span>

          <ArrowRight className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
