import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, ClipboardList, User, Settings, X } from "lucide-react";

export function MobileSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Drawer */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border
          transform transition-transform duration-300 lg:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="text-lg font-bold text-sidebar-primary">Menu</h2>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-sidebar-foreground" />
          </button>
        </div>

        <nav className="mt-4 flex flex-col gap-1 px-2">
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
              onClick={onClose}
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-4 py-3 rounded-md transition-colors
                ${
                  isActive
                    ? "text-sidebar-primary font-semibold bg-sidebar-accent"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }
              `
              }
            >
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
