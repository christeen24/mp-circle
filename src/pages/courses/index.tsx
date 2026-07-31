import { useState } from "react"
import { Sidebar, TopNav } from "@/components/layout"
import {
  CourseCard,
  FloatingActionButton,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui"
import type { ICourseCardProps } from "@/interfaces/course"

export default function CoursesPage() {
  const courses: ICourseCardProps["course"][] = [
    {
      id: "1",
      title: "Computer Science 101",
      instructor: "Dr. Alistair Smith",
      progress: 65,
      status: "in-progress",
      lastAccessed: "2h ago",
    },
    {
      id: "2",
      title: "Advanced Physics & Optics",
      instructor: "Prof. Elena Rodriguez",
      progress: 32,
      status: "in-progress",
      lastAccessed: "Yesterday",
    },
    {
      id: "3",
      title: "Principles of Modern Design",
      instructor: "Sarah Jenkins",
      progress: 100,
      status: "completed",
      completedOn: "May 12",
      lastAccessed: "Completed on May 12",
    },
    {
      id: "4",
      title: "Macroeconomics III",
      instructor: "Dr. Marcus Vane",
      progress: 12,
      status: "in-progress",
      lastAccessed: "4 days ago",
    },
    {
      id: "5",
      title: "Human Biology: Neuro Systems",
      instructor: "Dr. Lisa Wong",
      progress: 48,
      status: "in-progress",
      lastAccessed: "1h ago",
    },
    {
      id: "6",
      title: "Data Structures & Algorithms",
      instructor: "Prof. Michael Turner",
      progress: 78,
      status: "in-progress",
      lastAccessed: "3h ago",
    },
    {
      id: "7",
      title: "Environmental Science & Policy",
      instructor: "Dr. Helena Fischer",
      progress: 54,
      status: "in-progress",
      lastAccessed: "Today",
    },
    {
      id: "8",
      title: "Modern European History",
      instructor: "Dr. Klaus Reinhardt",
      progress: 100,
      status: "completed",
      completedOn: "June 21",
      lastAccessed: "Completed on June 21",
    },
    {
      id: "9",
      title: "Introduction to Psychology",
      instructor: "Dr. Naomi Patel",
      progress: 27,
      status: "in-progress",
      lastAccessed: "5 days ago",
    },
    {
      id: "10",
      title: "Business Analytics & Intelligence",
      instructor: "Prof. Daniel Cho",
      progress: 89,
      status: "in-progress",
      lastAccessed: "6h ago",
    },
  ]

  const [page, setPage] = useState(1)
  const pageSize = 6

  const paginatedCourses = courses.slice((page - 1) * pageSize, page * pageSize)

  const totalPages = Math.ceil(courses.length / pageSize)

  return (
    <div className="bg-background-main relative min-h-screen w-full">
      <Sidebar />
      <TopNav />

      <main className="min-h-screen pt-16 lg:ml-65">
        <div className="max-w-container-max mx-auto p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary">
                Active Courses
              </h2>
              <p className="text-on-surface-variant mt-1 text-sm">
                Manage your academic progress and learning modules.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>

          <Pagination className="mt-8">
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
      </main>

      <FloatingActionButton />
    </div>
  )
}
