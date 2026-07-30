import { useState } from "react"
import { Link } from "react-router-dom"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group"
import {
  GraduationCapIcon,
  LogInIcon,
  InfoIcon,
  ArrowRightIcon,
  MailIcon,
  EyeClosedIcon,
  EyeIcon,
  LockKeyholeIcon,
} from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [showEmailError, setShowEmailError] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    const isAcademic =
      email.includes(".edu") || email.includes(".ac") || email.includes(".de")

    if (!isAcademic) {
      setShowEmailError(true)
      return
    }

    setShowEmailError(false)
    setLoading(true)

    setTimeout(() => {
      alert("Success: Logging you into the student portal.")
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="bg-background-main relative flex min-h-screen w-full items-center justify-center px-4">
      {/* Card */}
      <main className="bg-surface-card border-border-subtle mx-auto w-full max-w-[420px] rounded-xl border p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center">
          <div className="text-on-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <GraduationCapIcon className="text-outline h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            MP Circle
          </h1>
          <p className="text-on-surface-variant mt-1 text-sm">Student Portal</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-on-surface-variant text-xs font-semibold tracking-wide uppercase"
            >
              Student Email
            </Label>
            <InputGroup>
              <InputGroupAddon>
                <MailIcon className="h-4 w-4" />
              </InputGroupAddon>

              <InputGroupInput
                id="email"
                type="email"
                placeholder="e.g. student@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            {showEmailError && (
              <p className="text-error flex items-center gap-1 text-xs">
                <InfoIcon className="h-4 w-4" />
                Please enter a valid academic email address.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-on-surface-variant text-xs font-semibold tracking-wide uppercase"
              >
                Password
              </Label>

              <Link
                to="#"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <InputGroup>
                <InputGroupAddon>
                  <LockKeyholeIcon className="h-4 w-4" />
                </InputGroupAddon>

                <InputGroupInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <InputGroupButton
                  size="icon-xs"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
                </InputGroupButton>
              </InputGroup>
            </div>
          </div>

          <Button
            type="submit"
            className="text-on-primary flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-xs font-bold tracking-widest uppercase"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin">
                  progress_activity
                </span>
                Authenticating...
              </>
            ) : (
              <>
                Sign In <LogInIcon className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {/* Support */}
        <div className="border-border-subtle mt-8 flex flex-col items-center gap-4 border-t pt-6">
          <p className="text-on-surface-variant text-sm">
            Having trouble accessing your account?
          </p>

          <Link
            to="#"
            className="group flex items-center gap-2 text-xs font-bold tracking-wide text-primary uppercase transition-all hover:gap-3"
          >
            <InfoIcon className="h-4 w-4" />
            Contact Student Support
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-6 w-full px-4 text-center">
        <p className="text-outline text-xs">
          © 2026 MP Circle Educational Systems. All rights reserved.
          <br className="md:hidden" />
          <Link
            to="#"
            className="mx-2 underline underline-offset-2 hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            to="#"
            className="mx-2 underline underline-offset-2 hover:text-primary"
          >
            Terms of Use
          </Link>
        </p>
      </footer>
    </div>
  )
}
