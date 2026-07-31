import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface NewsItem {
  category: string;
  categoryColor: string;
  time: string;
  title: string;
  description: string;
}

export function LatestNews() {
  const news: NewsItem[] = [
    {
      category: "Campus",
      categoryColor: "bg-primary text-primary-foreground",
      time: "2h ago",
      title: "New Library Extended Hours",
      description:
        "The main library will now remain open until midnight during finals week.",
    },
    {
      category: "Academic",
      categoryColor: "bg-secondary text-secondary-foreground",
      time: "Yesterday",
      title: "Winter Semester Registration Open",
      description:
        "Early bird registration for the upcoming winter term starts this Monday.",
    },
    {
      category: "Events",
      categoryColor: "bg-accent text-accent-foreground",
      time: "Oct 24",
      title: "Guest Lecture: AI in Healthcare",
      description:
        "Join Dr. Aris Thorne for an insightful session on medical AI applications.",
    },
  ];

  return (
    <Card className="bg-card p-6 border border-border rounded-xl h-fit flex flex-col">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between mb-2">
        <CardTitle className="text-foreground font-semibold text-lg">
          Latest News & Announcements
        </CardTitle>

        <button className="text-primary font-semibold text-sm hover:underline">
          View All
        </button>
      </CardHeader>

      {/* News List */}
      <CardContent className="flex-1 space-y-4 overflow-y-auto custom-scrollbar">
        {news.map((item, index) => (
          <div
            key={index}
            className="pb-4 border-b border-border last:border-0"
          >
            <div className="flex items-center justify-between mb-1">
              <span
                className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wide ${item.categoryColor}`}
              >
                {item.category}
              </span>

              <span className="text-muted-foreground text-xs">
                {item.time}
              </span>
            </div>

            <h5 className="text-foreground font-semibold text-sm hover:text-primary cursor-pointer transition-colors">
              {item.title}
            </h5>

            <p className="text-muted-foreground text-sm truncate">
              {item.description}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
