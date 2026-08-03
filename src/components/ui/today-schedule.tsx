import { MoreHorizontal } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ScheduleItem {
  time: string;
  title: string;
  location: string;
  color: "primary" | "accent" | "muted";
  attendees?: {
    image: string;
    count?: number;
  }[];
}

export function TodaySchedule() {
  const schedule: ScheduleItem[] = [
    {
      time: "09:00 - 10:30 AM",
      title: "Advanced Algorithms",
      location: "Lecture Hall C-12, Main Building",
      color: "primary",
      attendees: [
        {
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAabFEShjyHHcy5teGZAsNHQc6c81Hnp_TdxyVeUI0f6V9szAy9NhT3tDFcfeyNwl9nVXC0lwLMfNhuEsghgunNbwOzgx_ziJcks0L5vh-P0QIKiVbz8QkClzEIHHlISGkqgZ2mJXR9wHjEGASvyv9w-Oi-jpSVC0_vysvgjcg2xgFPxT_KN13duDs41uVjiU6rCB-YLBiFnbO0wxLVKLQTa2GDXc2AseEX2UO5uRipA8AM-bZj_hoEtw",
        },
        { image: "", count: 12 },
      ],
    },
    {
      time: "11:00 - 12:30 PM",
      title: "AI Research Lab",
      location: "Innovation Hub, Lab 4",
      color: "accent",
      attendees: [
        {
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDer5FI3meMl8SGamgMLfJC4gqqIpDYK1URKunGUL5dtLAoOyUaF4j8JNQV2IsA5FrqteUk0xKSnsHOixnf1Ihrbmh3SGxb48ePK2v3cRPeq5IHbULLOSRUAlCEsOFBwi4iNcAEFS8YMuwkIoBKOSkeUvV_yY0EW-az2B7YaoXcSu4zkOsEKkenu90sfcm0eKurca649qGsSnfEIXBQlD8xOaWKqeRZQBKJewQUepnfPix2f7qhHF0DRg",
        },
        { image: "", count: 5 },
      ],
    },
    {
      time: "02:00 - 04:00 PM",
      title: "Student Mentor Session",
      location: "Virtual Meeting - Zoom",
      color: "muted",
    },
  ];

  const colorMap = {
    primary: {
      dot: "bg-primary",
      ring: "ring-primary",
      time: "text-primary",
    },
    accent: {
      dot: "bg-accent",
      ring: "ring-accent",
      time: "text-accent-foreground",
    },
    muted: {
      dot: "bg-muted",
      ring: "ring-muted",
      time: "text-muted-foreground",
    },
  };

  return (
    <Card className="border border-border rounded-xl bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground font-semibold text-lg">
          Today’s Schedule
        </CardTitle>

        <button className="p-1 hover:bg-muted rounded transition-colors">
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </button>
      </CardHeader>

      <CardContent className="space-y-6">
        {schedule.map((item, index) => {
          const colors = colorMap[item.color];

          return (
            <div key={index} className="flex gap-4 relative">
              {/* Timeline Dot + Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full ${colors.dot} ring-4 ${colors.ring}`}
                ></div>

                {index !== schedule.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className={index !== schedule.length - 1 ? "pb-6" : ""}>
                <p
                  className={`text-xs font-bold mb-1 uppercase tracking-wider ${colors.time}`}
                >
                  {item.time}
                </p>

                <h5 className="text-foreground font-semibold mb-1">
                  {item.title}
                </h5>

                <p className="text-muted-foreground text-sm mb-2">
                  {item.location}
                </p>

                {/* Attendees */}
                {item.attendees && (
                  <div className="flex -space-x-2">
                    {item.attendees.map((att, i) =>
                      att.count ? (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border border-card bg-muted flex items-center justify-center text-[8px] font-bold"
                        >
                          +{att.count}
                        </div>
                      ) : (
                        <img
                          key={i}
                          src={att.image}
                          className="w-6 h-6 rounded-full border border-card object-cover"
                        />
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>

      <button className="w-full mt-6 py-3 border border-border rounded-lg text-sm font-semibold hover:bg-muted transition-colors">
        See Full Calendar
      </button>
    </Card>
  );
}
