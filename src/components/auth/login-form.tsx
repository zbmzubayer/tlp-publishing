"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { type LoginDto, loginSchema } from "@/validations/auth.dto";

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const { mutateAsync } = useMutation({
    // mutationFn: loginService,
    onSuccess: () => {
      /* Set authentication state */
    },
    onError: (error) => {
      toast.error("Login failed", {
        description: error.message || "Something went wrong",
      });
    },
  });

  const onSubmit = async (data: LoginDto) => {
    console.log(data);
    // await mutateAsync(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-bold text-2xl">Welcome back</h1>
          <p className="text-balance text-muted-foreground">Login to your account</p>
        </div>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </div>
              <Input
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
              />
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </div>
              <Input
                {...field}
                type="password"
                id="password"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
            </Field>
          )}
        />
        <Button type="submit" className="w-full">
          {form.formState.isSubmitting && <Spinner />}
          Login
        </Button>
        <FieldDescription className="text-center">
          Don&apos;t have an account? <Link href="/register">Sign up</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
