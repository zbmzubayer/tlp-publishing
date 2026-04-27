"use client";

import type { User } from "better-auth";
import { GlobeIcon, LogOutIcon, UserCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

export function UserAvatarDropdown({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src={user.image ?? ""} />
            <AvatarFallback>
              <UserCircle />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit" align="end">
        <DropdownMenuGroup>
          <p className="text-center text-sm">My account</p>
          <DropdownMenuLabel className="text-muted-foreground text-xs">
            {user.email}
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <Link href="/websites" className="w-full cursor-pointer">
            <GlobeIcon className="me-2" />
            My websites
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem asChild>
          <LogoutButton variant="destructive" className="w-full">
            <LogOutIcon />
            Logout
          </LogoutButton>
        </DropdownMenuItem> */}
        <DropdownLogoutMenuItem variant="destructive">
          <LogOutIcon />
          Logout
        </DropdownLogoutMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropdownLogoutMenuItem(props: React.ComponentProps<typeof DropdownMenuItem>) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <DropdownMenuItem
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
