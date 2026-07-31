import { AppLayout } from "@/components/layout/app-layout"

export default function ProfilePage() {
  return (
    <AppLayout>
      <div className="max-w-container-max mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Profile
            </h2>
            <p className="text-on-surface-variant mt-1 text-sm">
              View and edit your profile information.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <p className="text-on-surface-variant text-sm">
            No profile information available. Please check back later or contact
            support for assistance.
          </p>
        </div>
      </div>
    </AppLayout>
  )
}
