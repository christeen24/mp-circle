import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  Label,
  Spinner,
} from "@/components/ui"

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

import { useMutation } from "@tanstack/react-query"
import { loginWithEmail } from "@/api/auth"
import { useNavigate } from "react-router-dom"
import type { LoginResponse } from "@/interfaces/user"
import { useAuth } from "@/hooks/use-auth"
import { ROUTES } from "@/constants/routes"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, type LoginSchemaType } from "@/validation/login-schema"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })

  const loginMutation = useMutation<LoginResponse, Error, LoginSchemaType>({
    mutationFn: ({ email, password }) => loginWithEmail(email, password),
    onSuccess: (data) => {
      login(data)
      navigate(ROUTES.DASHBOARD)
    },
    onError: (error) => {
      setServerError(error.message)
    },
  })

  function onSubmit(values: LoginSchemaType) {
    setServerError(null)
    loginMutation.mutate(values)
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background px-4">
      <main className="mx-auto w-full max-w-105 rounded-xl border border-border bg-card p-8 shadow-md">
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
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
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
                {...register("email")}
                className="border-border bg-muted text-foreground placeholder:text-muted-foreground"
              />
            </InputGroup>

            {errors.email && (
              <p className="flex items-center gap-1 text-xs text-destructive">
                <InfoIcon className="h-4 w-4" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
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
                  {...register("password")}
                  className="border-border bg-muted text-foreground placeholder:text-muted-foreground"
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

            {errors.password && (
              <p className="flex items-center gap-1 text-xs text-destructive">
                <InfoIcon className="h-4 w-4" />
                {errors.password.message}
              </p>
            )}

            {serverError && (
              <p className="flex items-center gap-1 text-xs text-destructive">
                <InfoIcon className="h-4 w-4" />
                {serverError}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-xs font-bold tracking-widest text-primary-foreground uppercase"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? (
              <>
                <Spinner className="h-4 w-4 text-primary-foreground" />
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
            className="group flex items-center gap-2 text-xs font-bold tracking-wide text-primary uppercase transition-all hover:gap-3"
          >
            <InfoIcon className="h-4 w-4" />
            Contact Student Support
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>
    </div>
  )
}
