import { BarChart3Icon, CreditCardIcon, GlobeIcon, UserCircleIcon } from "lucide-react";
import Link from "next/link";
import { brand } from "@/components/site-content";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarMenuButtonActive } from "@/layouts/dashboard/sidebar-menu-button-active";

const mainNavItems = [
  { title: "Website", url: "/websites", icon: GlobeIcon },
  { title: "Usage", url: "/usage", icon: BarChart3Icon },
];

const accountNavItems = [
  { title: "Billing", url: "/billing", icon: CreditCardIcon },
  { title: "Profile", url: "/profile", icon: UserCircleIcon },
  // { title: "Settings", url: "/portal/settings", icon: SettingsIcon },
];

export function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-14 justify-center border-b border-b-sidebar-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center">
            {/* <ZapIcon className="size-5 text-primary" /> */}
            <img src={brand.logoSrc} alt="TLP Logo" className="size-5 object-contain" />
          </div>
          <span className="truncate font-medium">{brand.name}</span>
          <SidebarTrigger className="ml-auto sm:hidden" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButtonActive icon={<item.icon />} title={item.title} url={item.url} />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {accountNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButtonActive icon={<item.icon />} title={item.title} url={item.url} />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
