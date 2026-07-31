import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  Label,
} from "@/components/ui";

import {
  GraduationCapIcon,
  LogInIcon,
  InfoIcon,
  ArrowRightIcon,
  MailIcon,
  EyeClosedIcon,
  EyeIcon,
  LockKeyholeIcon,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const isAcademic =
      email.includes(".edu") || email.includes(".ac") || email.includes(".de");

    if (!isAcademic) {
      setShowEmailError(true);
      return;
    }

    setShowEmailError(false);
    setLoading(true);

    setTimeout(() => {
      alert("Success: Logging you into the student portal.");
      setLoading(false);
    }, 1500);
  }

  return (
    <div className="bg-background relative flex min-h-screen w-full items-center justify-center px-4">
      {/* Card */}
      <main className="bg-card border border-border mx-auto w-full max-w-[420px] rounded-xl p-8 shadow-md">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <GraduationCapIcon className="h-8 w-8 text-primary-foreground" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-primary">
            MP Circle
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Student Portal</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-semibold tracking-wide uppercase text-muted-foreground"
            >
              Student Email
            </Label>

            <InputGroup>
              <InputGroupAddon>
                <MailIcon className="h-4 w-4 text-muted-foreground" />
              </InputGroupAddon>

              <InputGroupInput
                id="email"
                type="email"
                placeholder="e.g. student@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </InputGroup>

            {showEmailError && (
              <p className="flex items-center gap-1 text-xs text-destructive">
                <InfoIcon className="h-4 w-4" />
                Please enter a valid academic email address.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-semibold tracking-wide uppercase text-muted-foreground"
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
                  <LockKeyholeIcon className="h-4 w-4 text-muted-foreground" />
                </InputGroupAddon>

                <InputGroupInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
                />

                <InputGroupButton
                  size="icon-xs"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-primary"
                >
                  {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
                </InputGroupButton>
              </InputGroup>
            </div>
          </div>

          <Button
            type="submit"
            className="
              flex w-full items-center justify-center gap-2 rounded-lg
              bg-primary py-3 text-xs font-bold tracking-widest uppercase
              text-primary-foreground
            "
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
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            Having trouble accessing your account?
          </p>

          <Link
            to="#"
            className="
              group flex items-center gap-2 text-xs font-bold tracking-wide
              text-primary uppercase transition-all hover:gap-3
            "
          >
            <InfoIcon className="h-4 w-4" />
            Contact Student Support
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-6 w-full px-4 text-center">
        <p className="text-xs text-muted-foreground">
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
  );
}
