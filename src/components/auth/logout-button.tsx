"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function LogoutButton({ onClick, ...props }: React.ComponentProps<typeof Button>) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <Button
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        const { data, error } = await authClient.signOut();
        setLoading(false);
        if (error) {
          toast.error("Logout failed", {
            description: error?.message || "Something went wrong",
          });
        } else if (data.success) {
          router.push("/login");
          // router.refresh() is needed to update the session state in the header (if header is in the layout)
          // layout is not re-rendered on router.push
          // router.push does not trigger a full page reload
          router.refresh();
        }
      }}
      {...props}
    />
  );
}
