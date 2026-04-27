import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-card px-4">
      <div className="flex items-center gap-7">
        <SidebarTrigger />
        {/* <h1 className="font-medium">{title}</h1> */}
      </div>
      {/* <ThemeToggle /> */}
    </header>
  );
}
