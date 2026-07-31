import { Sidebar, TopNav, MobileNav } from "@/components/layout"
import {
  Card,
  DashboardCourseCard,
  FloatingActionButton,
  LatestNews,
  QuickTasks,
  TodaySchedule,
} from "@/components/ui"

import {
  BookOpen,
  ClipboardList,
  CheckCircle2,
  GraduationCap,
} from "lucide-react"

export default function DashboardPage() {
  const greeting = (() => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good Morning, Christeen"
    if (hour < 18) return "Good Afternoon, Christeen"
    return "Good Evening, Christeen"
  })()

  return (
    <div className="bg-background-main relative min-h-screen w-full">
      <Sidebar />
      <TopNav />

      <main className="min-h-screen pt-16 lg:ml-65">
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
            <Card className="border-border-subtle flex flex-row items-center justify-start gap-4 rounded-xl border p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-primary">
                <BookOpen className="h-8 w-8" />
              </div>
              <div>
                <p className="text-on-surface-variant text-xs font-semibold">
                  Total Courses
                </p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </Card>

            <Card className="border-border-subtle flex flex-row items-center justify-start gap-4 rounded-xl border p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-destructive">
                <ClipboardList className="h-8 w-8" />
              </div>
              <div>
                <p className="text-on-surface-variant text-xs font-semibold">
                  Upcoming Assignments
                </p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </Card>

            <Card className="border-border-subtle flex flex-row items-center justify-start gap-4 rounded-xl border p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-chart-2">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <p className="text-on-surface-variant text-xs font-semibold">
                  Attendance
                </p>
                <p className="text-2xl font-bold">94%</p>
              </div>
            </Card>

            <Card className="border-border-subtle flex flex-row items-center justify-start gap-4 rounded-xl border p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-chart-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <p className="text-on-surface-variant text-xs font-semibold">
                  GPA
                </p>
                <p className="text-2xl font-bold">3.8</p>
              </div>
            </Card>
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
      </main>

      <MobileNav />
      <FloatingActionButton />
    </div>
  )
}
