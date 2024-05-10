"use server";
import { cookies } from "next/headers";
import { authKey } from "@/constants/authKey";
import { redirect } from "next/navigation";
const setAccessToken = (token: string, option?: any) => {
  cookies().set(authKey, token);

  if (option && option?.role === "PATIENT") {
    redirect("/dashboard");
  }

  if (option && option?.needPasswordChanged) {
    redirect("/dashboard/change-password");
  }
  if (option && !option?.needPasswordChanged && option?.redirect) {
    redirect(option.redirect);
  }
  //   if (option && option.redirect) {
  //     redirect(option.redirect);
  //   }
};

export default setAccessToken;
