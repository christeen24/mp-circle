import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  User,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside
      className="
        fixed top-0 left-0 z-50
        hidden h-screen w-65 lg:flex flex-col
        bg-sidebar border-r border-sidebar-border
        supports-backdrop-filter:bg-sidebar/90
        backdrop-blur-md
        shadow-md
      "
    >
      {/* Brand */}
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight text-sidebar-primary">
          MP Circle
        </h1>
        <p className="text-sidebar-foreground text-xs opacity-70">
          Student Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1 space-y-1 px-2">
        {[
          { to: "/", label: "Dashboard", icon: LayoutDashboard },
          { to: "/courses", label: "Courses", icon: BookOpen },
          { to: "/assignments", label: "Assignments", icon: ClipboardList },
          { to: "/profile", label: "Profile", icon: User },
          { to: "/settings", label: "Settings", icon: Settings },
        ].map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `
              flex items-center gap-3 px-4 py-3 rounded-md transition-colors border-l-4
              ${
                isActive
                  ? "border-sidebar-primary text-sidebar-primary font-semibold"
                  : "border-transparent text-sidebar-foreground hover:bg-sidebar-accent"
              }
            `
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User Footer */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-sidebar-accent">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-bold">
            JD
          </div>
          <div>
            <p className="text-xs font-semibold text-sidebar-foreground">
              John Doe
            </p>
            <p className="text-sidebar-foreground text-[10px] opacity-70">
              S-29401
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
