import { useState } from "react"
import {
  CourseCard,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui"
import { AppLayout } from "@/components/layout/app-layout"
import { useCourses } from "@/hooks/use-courses"

export default function CoursesPage() {
  const { data: courses = [] } = useCourses()

  const [page, setPage] = useState(1)
  const pageSize = 6

  const paginatedCourses = courses.slice((page - 1) * pageSize, page * pageSize)

  const totalPages = Math.ceil(courses.length / pageSize)

  return (
    <AppLayout>
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
    </AppLayout>
  )
}
