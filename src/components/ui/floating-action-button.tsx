import { Plus } from "lucide-react";

export function FloatingActionButton() {
  return (
    <button className="lg:hidden fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center active:scale-95 transition-transform">
      <Plus className="h-6 w-6" />
    </button>
  );
}
