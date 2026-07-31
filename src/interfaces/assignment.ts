export interface IAssignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low" | "Closed";
  status: "Pending" | "Submitted";
}
