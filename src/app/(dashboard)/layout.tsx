import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/layouts/dashboard/dashboard-header";
import { DashboardSidebar } from "@/layouts/dashboard/dashboard-sidebar";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 overflow-auto bg-muted/30 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
