import Link from "next/link";
import { getWebsiteById } from "@/actions/website.action";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function WebsitePreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const website = await getWebsiteById(id);

  return (
    <div className="container min-h-screen py-10">
      <Link href="/website" className={cn(buttonVariants({ variant: "secondary" }), "mb-4")}>
        Back to Generator
      </Link>
      <iframe
        srcDoc={website.html}
        className="min-h-screen w-full rounded-md border"
        sandbox="allow-scripts"
        title="Generated Page"
      />
    </div>
  );
}
