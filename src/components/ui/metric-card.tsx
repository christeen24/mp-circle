import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  icon: LucideIcon
  iconColor?: string
  iconBg?: string
  label: string
  value: string | number
  subLabel?: string
  accent?: boolean
}

export function MetricCard({
  icon: Icon,
  iconColor = "text-primary",
  iconBg = "bg-secondary",
  label,
  value,
  subLabel,
  accent = false,
}: MetricCardProps) {
  return (
    <Card
      className={`flex flex-row items-center gap-4 rounded-xl border p-8 ${accent ? "bg-primary text-primary-foreground" : "border-border-subtle"} `}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-sm ${iconBg} ${iconColor} `}
      >
        <Icon className="h-8 w-8" />
      </div>

      <div>
        <p
          className={`text-xs font-semibold ${accent ? "text-primary-foreground" : "text-on-surface-variant"} `}
        >
          {label}
        </p>

        <p
          className={`text-2xl font-bold ${accent ? "text-primary-foreground" : ""} `}
        >
          {value}
        </p>
        {subLabel && (
          <p
            className={`text-sm ${accent ? "text-primary-foreground" : "text-on-surface-variant"} `}
          >
            {subLabel}
          </p>
        )}
      </div>
    </Card>
  )
}
