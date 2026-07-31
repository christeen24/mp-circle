export interface ICourse {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  status: "completed" | "in-progress";
  completedOn?: string;
  lastAccessed?: string;
  image: string; 
}

export interface ICourseCardProps {
  course: ICourse;
}
