import { Bell, HelpCircle, Menu, Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function TopNav() {
  return (
    <header className="fixed top-0 right-0 z-50 h-16 w-full border-b border-border bg-background shadow-sm backdrop-blur-md supports-backdrop-filter:bg-background/80 lg:w-[calc(100%-260px)]">
      <div className="max-w-container-max mx-auto flex h-full items-center justify-between px-6 py-3">
        {/* Mobile Menu */}
        <button className="p-2 text-muted-foreground transition-colors hover:text-primary lg:hidden">
          <Menu className="h-5 w-5" />
        </button>

        {/* Search */}
        <div className="max-w-md flex-1">
          <InputGroup>
            <InputGroupAddon>
              <Search className="h-4 w-4 text-muted-foreground" />
            </InputGroupAddon>

            <InputGroupInput
              placeholder="Search your courses..."
              className="border-border bg-muted text-sm placeholder:text-muted-foreground"
            />
          </InputGroup>
        </div>

        {/* Right Icons */}
        <div className="ml-6 flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-muted-foreground transition-colors hover:text-primary">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
          </button>

          {/* Help */}
          <button className="p-2 text-muted-foreground transition-colors hover:text-primary">
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
