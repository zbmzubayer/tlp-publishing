"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import type { LoginDto, RegisterDto } from "@/validations/auth.dto";

export async function loginService(loginDto: LoginDto) {
  await auth.api.signInEmail({ body: loginDto });
}

export async function registerService(registerDto: RegisterDto) {
  const name = `${registerDto.firstName} ${registerDto.lastName || ""}`.trim();
  const { user } = await auth.api.signUpEmail({ body: { ...registerDto, name } });

  if (user) {
    await prisma.profile.create({
      data: {
        firstName: registerDto.firstName,
        lastName: registerDto.lastName,
        userId: user.id,
      },
    });
  }
  return true;
}

export const getProfile = async (userId: string) => {
  return await prisma.profile.findUnique({ where: { userId } });
};
