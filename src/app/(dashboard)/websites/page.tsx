import Link from "next/link";
import { getAllAuthUserWebsite } from "@/actions/website.action";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function WebsitesPage() {
  const websites = await getAllAuthUserWebsite();

  const totalWebsites = websites.length;
  const latestWebsite = websites[0];

  return (
    <section className="min-h-screen">
      <div className="max-w-6xl space-y-8">
        <div className="rounded-3xl border bg-linear-to-br from-background via-background to-muted/40 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 font-medium text-muted-foreground text-xs">
                Dashboard
              </div>
              <div className="space-y-2">
                <h1 className="font-semibold text-3xl tracking-tight md:text-4xl">Your Websites</h1>
                <p className="max-w-2xl text-muted-foreground">
                  Manage every generated website in one place. Open a preview, review details, and
                  jump back into the generator anytime.
                </p>
              </div>
            </div>

            <Link href="/website" className={cn(buttonVariants({ variant: "default" }), "w-fit")}>
              Generate new website
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card size="sm" className="bg-background/80">
              <CardHeader>
                <CardDescription>Total websites</CardDescription>
                <CardTitle className="text-3xl">{totalWebsites}</CardTitle>
              </CardHeader>
            </Card>

            <Card size="sm" className="bg-background/80">
              <CardHeader>
                <CardDescription>Latest update</CardDescription>
                <CardTitle className="text-base">
                  {latestWebsite
                    ? formatDate(new Date(latestWebsite.updatedAt))
                    : "No websites yet"}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>

        {websites.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-3 rounded-full bg-muted px-4 py-2 text-muted-foreground text-sm">
                Nothing here yet
              </div>
              <h2 className="font-semibold text-xl">You haven’t generated any websites yet.</h2>
              <p className="mt-2 max-w-md text-muted-foreground text-sm">
                Create your first one to see it listed here with a preview link, creation date, and
                quick access to the generator.
              </p>
              <Link href="/website" className={cn(buttonVariants({ variant: "default" }), "mt-6")}>
                Generate your first website
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {websites.map((website) => (
              <Card
                key={website.id}
                className="group hover:-translate-y-1 border-border/60 bg-card/90 shadow-sm transition-all duration-200 hover:shadow-lg"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-xl leading-tight">{website.name}</CardTitle>
                      <CardDescription>Generated website</CardDescription>
                    </div>
                    <span className="rounded-full border bg-muted/60 px-3 py-1 font-medium text-muted-foreground text-xs">
                      {website.id.slice(0, 8)}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5">
                  <div className="grid gap-3 text-muted-foreground text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span>Created</span>
                      <span className="font-medium text-foreground">
                        {formatDate(new Date(website.createdAt))}
                      </span>
                    </div>
                    {/* <div className="flex items-center justify-between gap-4">
                      <span>Updated</span>
                      <span className="font-medium text-foreground">
                        {formatDate(new Date(website.updatedAt))}
                      </span>
                    </div> */}
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Link
                      href={`/website/${website.id}`}
                      className={cn(buttonVariants({ variant: "default" }), "sm:flex-1")}
                    >
                      Visit preview
                    </Link>
                    {/* <Link
                      href={`/website/${website.id}`}
                      className={cn(buttonVariants({ variant: "secondary" }), "sm:flex-1")}
                    >
                      Open
                    </Link> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
