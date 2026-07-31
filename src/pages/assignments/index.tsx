import {
  Badge,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  MetricCard,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"

import { useState } from "react"
import {
  AlertCircle,
  Calendar,
  CalendarIcon,
  CalendarXIcon,
  CircleCheck,
  CircleCheckIcon,
  ClipboardClockIcon,
  Clock,
  Trash,
  Pencil,
  Eye,
  MoreHorizontal,
} from "lucide-react"
import { AppLayout } from "@/components/layout/app-layout"

export default function AssignmentsPage() {
  const assignments = [
    {
      id: "1",
      title: "Case Study: Neural Network Optimization",
      course: "CS 402: Deep Learning",
      due: "Oct 24, 2023",
      priority: "High",
      status: "Pending",
    },
    {
      id: "2",
      title: "Final Project: Database Architecture",
      course: "CS 305: Database Systems",
      due: "Nov 02, 2023",
      priority: "Medium",
      status: "Submitted",
    },
    {
      id: "3",
      title: "Weekly Quiz: Cloud Infrastructure",
      course: "CS 415: Distributed Systems",
      due: "Oct 20, 2023",
      priority: "Low",
      status: "Late",
    },
    {
      id: "4",
      title: "Ethics in Artificial Intelligence",
      course: "PHI 202: Tech Ethics",
      due: "Oct 28, 2023",
      priority: "High",
      status: "Pending",
    },
    {
      id: "5",
      title: "Lab 4: Memory Management in C",
      course: "CS 210: Systems Programming",
      due: "Oct 18, 2023",
      priority: "Closed",
      status: "Submitted",
    },
  ]

  const [page, setPage] = useState(1)
  const pageSize = 5
  const totalPages = Math.ceil(assignments.length / pageSize)

  const paginated = assignments.slice((page - 1) * pageSize, page * pageSize)

  return (
    <AppLayout>
      <div className="max-w-container-max mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Assignments
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Track your pending, submitted, and overdue assignments.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <MetricCard
            icon={ClipboardClockIcon}
            label="Pending"
            value={12}
            iconColor="text-muted-foreground"
            iconBg="bg-card"
          />

          <MetricCard
            icon={CircleCheckIcon}
            label="Submitted"
            value={48}
            iconColor="text-primary"
            iconBg="bg-card"
          />

          <MetricCard
            icon={CalendarXIcon}
            label="Late"
            value={1}
            iconColor="text-destructive"
            iconBg="bg-card"
          />

          <MetricCard
            icon={CalendarIcon}
            label="Next Deadline"
            value="2 days left"
            subLabel="Advanced Calculus II"
            accent
          />
        </div>

        {/* Table */}
        <div className="rounded-md border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assignment Title</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginated.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium text-foreground">
                    {a.title}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {a.course}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {a.due}
                    </div>
                  </TableCell>

                  {/* Priority */}
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        a.priority === "High"
                          ? "border-destructive text-destructive"
                          : a.priority === "Medium"
                            ? "border-primary text-primary"
                            : "border-border text-muted-foreground"
                      }
                    >
                      {a.priority}
                    </Badge>
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <Badge
                      className={
                        a.status === "Pending"
                          ? "bg-muted text-foreground"
                          : a.status === "Submitted"
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-destructive text-destructive-foreground"
                      }
                    >
                      <span className="flex items-center gap-1">
                        {a.status === "Pending" && (
                          <Clock className="h-4 w-4" />
                        )}
                        {a.status === "Submitted" && (
                          <CircleCheck className="h-4 w-4" />
                        )}
                        {a.status === "Late" && (
                          <AlertCircle className="h-4 w-4" />
                        )}
                        {a.status}
                      </span>
                    </Badge>
                  </TableCell>

                  {/* Actions */}
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <button className="rounded p-2 transition-colors hover:bg-muted">
                          <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-primary" />
                          View
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center gap-2">
                          <Pencil className="h-4 w-4 text-primary" />
                          Edit
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                          <Trash className="h-4 w-4 text-destructive" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => page > 1 && setPage(page - 1)}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => page < totalPages && setPage(page + 1)}
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </AppLayout>
  )
}
