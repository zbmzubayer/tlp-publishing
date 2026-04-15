import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WebsiteGenerationForm } from "@/components/website/website-generation-form";

export default function WebsiteGenerationPage() {
  return (
    <section className="container min-h-screen py-10">
      <div className="mx-auto max-w-xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Generate Your Website</CardTitle>
            <CardDescription>Fill out the form below to generate your new website.</CardDescription>
          </CardHeader>
          <CardContent>
            <WebsiteGenerationForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
