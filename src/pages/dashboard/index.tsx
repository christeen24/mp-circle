import {
  DashboardCourseCard,
  LatestNews,
  MetricCard,
  QuickTasks,
  TodaySchedule,
} from "@/components/ui"

import {
  BookOpen,
  ClipboardList,
  CheckCircle2,
  GraduationCap,
} from "lucide-react"

import { useCourses } from "@/hooks/use-courses"
import { useAssignments } from "@/hooks/use-assignments"
import { useAuth } from "@/hooks/use-auth"
import { AppLayout } from "@/components/layout/app-layout"

export default function DashboardPage() {
  const { user } = useAuth()
  const { data: courses } = useCourses()
  const { data: assignments } = useAssignments()

  const greeting = (() => {
    const hour = new Date().getHours()
    if (hour < 12)
      return `Good Morning, ${user?.firstName + " " + user?.lastName || "there"}`
    if (hour < 18)
      return `Good Afternoon, ${user?.firstName + " " + user?.lastName || "there"}`
    return `Good Evening, ${user?.firstName + " " + user?.lastName || "there"}`
  })()

  return (
    <AppLayout>
      <div className="max-w-container-max mx-auto p-6 lg:p-8">
        {/* Greeting */}
        <div className="mb-8">
          <h2 className="text-text-heading text-3xl font-bold">{greeting}</h2>
          <p className="text-on-surface-variant mt-1 text-sm">
            You have 3 assignments due this week. Stay focused!
          </p>
        </div>

        {/* Key Metrics */}

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            icon={BookOpen}
            label="Total Courses"
            value={courses?.length || 0}
            iconColor="text-primary"
            iconBg="bg-secondary"
          />

          <MetricCard
            icon={ClipboardList}
            label="Upcoming Assignments"
            value={assignments?.length || 0}
            iconColor="text-destructive"
            iconBg="bg-secondary"
          />

          <MetricCard
            icon={CheckCircle2}
            label="Attendance"
            value="94%"
            iconColor="text-chart-2"
            iconBg="bg-secondary"
          />

          <MetricCard
            icon={GraduationCap}
            label="GPA"
            value="3.8"
            iconColor="text-chart-4"
            iconBg="bg-secondary"
          />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* Recently Accessed Courses */}
          <div className="space-y-6 xl:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-text-heading text-xl font-semibold">
                Recently Accessed Courses
              </h3>
              <button className="text-sm font-semibold text-primary hover:underline">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <DashboardCourseCard
                title="Advanced Algorithms"
                code="CS-402"
                instructor="Prof. Sarah Jenkins"
                progress={75}
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD1mTuuWH6wVtt6kpgO-FNAHg2GEb8HVN6gcwFkHtstqdJBCPQcUxVlI3N2XnHc69BFDZ4ngVGfKSCDn5TfT1KvAvDoMEQ5exUZFD1ovmmuP91oD0MdkjmIJRcl_7s-haKa1UG4XBB5CAzjuk_DtWwnEZdS8UAwvE2NN61F7qRy2A8yRC3qcXSAuTJQQ9VmHcqlbkAv2VY4Y8N0NQHzgtoZ2CQNcDZKGdDxMvDM56h0YIDM2PbDH4IPPQ"
              />
              <DashboardCourseCard
                title="Artificial Intelligence"
                code="CS-501"
                instructor="Dr. James Watson"
                progress={42}
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDwF-mxJdIpg1Bxou9Px6GJTBz4bpM8UowVZoucjSvGOJCsH5aIq_YLTyjNUwVmBi19RyGYTCXqmIMvuH1fAmWOc72dmdaofW3j2UKDyvWbllrSLl-Ev0JDZhaWNPSUWBKK0kRkfsS65YrNFLNpxTG5Ui58xxeY0at-CLJTuj5xYBvvqpMlrEhXPb8rZmqMhFuBviaFNnXSccX1Eamein8Xri4RQcd8oDjRudyEuZwMG1FybPplYe8crQ"
                accent="secondary"
              />
            </div>

            <LatestNews />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <TodaySchedule />
            <QuickTasks />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
