"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { websiteGenerationService } from "@/actions/website.action";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { type WebsiteGenerationDto, websiteGenerationSchema } from "@/validations/website.dto";

export function WebsiteGenerationForm() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(websiteGenerationSchema),
    defaultValues: { name: "", description: "", author: "", contactEmail: "" },
  });

  const { mutateAsync } = useMutation({
    mutationFn: websiteGenerationService,
    onSuccess: (data) => {
      toast.success("Website generated successfully", { description: "Your website is ready!" });
      router.push(`/website/${data.id}`);
    },
    onError: (error) => {
      toast.error("Failed to generate website", {
        description: error.message || "Something went wrong",
      });
    },
  });

  const onSubmit = async (data: WebsiteGenerationDto) => {
    await mutateAsync(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="name">Name</FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </div>
              <Input
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your website name"
                autoComplete="off"
              />
            </Field>
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="description">Description</FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </div>
              <Textarea
                {...field}
                id="description"
                aria-invalid={fieldState.invalid}
                autoComplete="off"
                placeholder="Enter the description of your website"
                className="min-h-20 resize-none"
              />
            </Field>
          )}
        />
        <Controller
          name="author"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="author">Author</FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </div>
              <Input
                {...field}
                id="author"
                aria-invalid={fieldState.invalid}
                placeholder="Enter the author name"
                autoComplete="off"
              />
            </Field>
          )}
        />
        <Controller
          name="contactEmail"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="contactEmail">Contact Email</FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className="text-xs" />
                )}
              </div>
              <Input
                {...field}
                id="contactEmail"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your contact email"
                autoComplete="off"
              />
            </Field>
          )}
        />
        <Button type="submit" className="w-full">
          {form.formState.isSubmitting && <Spinner />}
          Generate Website
        </Button>
      </FieldGroup>
    </form>
  );
}
