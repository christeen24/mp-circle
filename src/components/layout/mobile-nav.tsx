import { NavLink } from "react-router-dom";
import { LayoutDashboard, School, ClipboardList, User } from "lucide-react";

export function MobileNav() {
  return (
    <nav className="
      lg:hidden fixed bottom-0 left-0 w-full
      bg-card border-t border-border
      flex justify-around items-center
      py-3 px-4 z-50
    ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`
        }
      >
        <LayoutDashboard className="h-5 w-5" />
        <span className="text-[10px] font-bold">Dash</span>
      </NavLink>

      <NavLink
        to="/courses"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`
        }
      >
        <School className="h-5 w-5" />
        <span className="text-[10px]">Courses</span>
      </NavLink>

      <NavLink
        to="/assignments"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`
        }
      >
        <ClipboardList className="h-5 w-5" />
        <span className="text-[10px]">Tasks</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 ${
            isActive ? "text-primary" : "text-muted-foreground"
          }`
        }
      >
        <User className="h-5 w-5" />
        <span className="text-[10px]">Profile</span>
      </NavLink>
    </nav>
  );
}
