"use server";
export const registerPatient = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/user/create-patient`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );

  const userInfo = await res.json();

  return userInfo;
};
