import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/constants/api";

export function useAssignments() {
  return useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const res = await fetch(API_ENDPOINTS.ASSIGNMENTS);
      return res.json();
    },
  });
}
