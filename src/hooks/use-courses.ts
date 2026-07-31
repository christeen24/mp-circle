import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/constants/api";
import type { ICourse } from "@/interfaces/course";

export function useCourses() {
  return useQuery<ICourse[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(API_ENDPOINTS.COURSES);
      if (!res.ok) throw new Error("Failed to load courses");
      return res.json();
    },
  });
}
