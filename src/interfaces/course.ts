export interface ICourseCardProps {
  course: {
    id: string;
    title: string;
    instructor: string;
    progress: number;
    status: "completed" | "in-progress";
    completedOn?: string;
    lastAccessed?: string;
  };
}