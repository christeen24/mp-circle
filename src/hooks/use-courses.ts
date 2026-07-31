import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/constants/api";

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(API_ENDPOINTS.COURSES);
      return res.json();
    },
  });
}
