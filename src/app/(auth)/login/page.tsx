import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import { brand } from "@/components/site-content";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FieldDescription } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-4xl">
          <Link href="/" className={cn(buttonVariants({ variant: "secondary" }), "mb-3")}>
            <ArrowLeftIcon />
            Back
          </Link>
          <div className="flex flex-col gap-6">
            <Card className="overflow-hidden p-0">
              <CardContent className="grid p-0 md:grid-cols-2">
                <LoginForm />
                <div className="relative hidden bg-muted md:block">
                  <Image
                    src={brand.logoSrc}
                    alt={`${brand.name} Logo`}
                    height={100}
                    width={100}
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                  />
                </div>
              </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
              By clicking continue, you agree to our <Link href="/terms">Terms of Service</Link> and{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </FieldDescription>
          </div>
        </div>
      </div>
    </div>
  );
}
