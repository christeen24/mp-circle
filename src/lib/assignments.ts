import type { IAssignment } from "@/interfaces/assignment";

export function isLate(dueDate: string) {
  return new Date(dueDate).getTime() < Date.now();
}

export function daysLeft(dateStr: string) {
  const now = new Date();
  const due = new Date(dateStr);
  const diff = due.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function getAssignmentStats(assignments: IAssignment[]) {
  const pending = assignments.filter(a => !isLate(a.dueDate) && a.status === "Pending").length;
  const submitted = assignments.filter(a => a.status === "Submitted").length;
  const late = assignments.filter(a => isLate(a.dueDate) && a.status !== "Submitted").length;

  const upcoming = assignments
    .filter(a => !isLate(a.dueDate) && a.status !== "Submitted")
    .sort(
      (a, b) =>
        new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );

  const nextDeadline = upcoming[0] ?? null;
  const nextDeadlineDays = nextDeadline ? daysLeft(nextDeadline.dueDate) : null;

  return {
    pending,
    submitted,
    late,
    nextDeadline,
    nextDeadlineDays,
  };
}
