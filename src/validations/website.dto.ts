import { z } from "zod";

export const websiteGenerationSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  description: z.string().max(200).optional(),
  author: z.string().max(100).optional(),
  contactEmail: z.string().email().optional(),
});
export type WebsiteGenerationDto = z.infer<typeof websiteGenerationSchema>;
