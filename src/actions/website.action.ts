"use server";

import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { claude } from "@/lib/claude";
import prisma from "@/lib/prisma";
import type { WebsiteGenerationDto } from "@/validations/website.dto";

export async function websiteGenerationService(websiteDto: WebsiteGenerationDto) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  const websiteDetails = {
    websiteName: websiteDto.name,
    websiteDescription: websiteDto.description,
    websiteAuthorOrCompanyName: websiteDto.author ?? undefined,
    websiteContactEmail: websiteDto.contactEmail ?? undefined,
  };
  console.log("Received website generation request:", JSON.stringify(websiteDetails));
  const html = await claude(JSON.stringify(websiteDetails));
  const website = await prisma.website.create({
    data: {
      name: websiteDto.name,
      html,
      userId: session.user.id,
    },
  });
  return website;
}

export async function getWebsiteById(id: string) {
  try {
    const website = await prisma.website.findUnique({ where: { id } });
    if (!website) {
      return notFound();
    }
    return website;
  } catch (error) {
    console.error("Error fetching website by ID:", error);
    return notFound();
  }
}

export async function getAllAuthUserWebsite() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  try {
    const websites = await prisma.website.findMany({
      where: { userId: session.user.id },
    });
    return websites;
  } catch (error) {
    console.error("Error fetching websites by user ID:", error);
    return [];
  }
}
