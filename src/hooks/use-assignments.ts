import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/constants/api";
import type { IAssignment } from "@/interfaces/assignment";

export function useAssignments() {
  return useQuery<IAssignment[]>({
    queryKey: ["assignments"],
    queryFn: async () => {
      const res = await fetch(API_ENDPOINTS.ASSIGNMENTS);
      if (!res.ok) throw new Error("Failed to load assignments");
      return res.json();
    },
  });
}
