"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const password = formData.get("password") as string;

  if (password === "SVGA") {
    const cookieStore = await cookies();
    cookieStore.set("svga_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    redirect("/");
  }

  redirect("/login?error=Incorrect+password.+Please+try+again.");
}
