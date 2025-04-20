"use client";

// import { Button } from "@chakra-ui/react";
import Button from "@/components/Button";
// import { Input } from "@chakra-ui/react";
import Input from "@/components/form/Input";

import { FormProvider, useForm } from "react-hook-form";
import { useRegisterMutation } from "./hooks/getRegisMutation";
// import { RegisterForm } from "./hooks/getRegisMutation";
export type RegisterForm = {
  username: string;
  name: string;
  password: string;
};

export default function RegisterPage() {
  const methods = useForm<RegisterForm>({
    mode: "onTouched",
  });

  const { handleSubmit } = methods;

    const { handleRegister, isPending } = useRegisterMutation();

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
    handleRegister({
      ...data,
    });
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <section></section>
      <section>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center h-screen bg-gray-500"
          >
            <h1>Registration Page</h1>
            <p>Welcome to the registration page!</p>
            <Input id="name" label="Nama Lengkap" placeholder="Masukkan Nama Lengkap" />
            <Input id="username" label="Username" placeholder="Masukkan Username" />
            <Input
              id="password"
              label="Password"
              placeholder="Masukkan Password"
            />
            <Button type="submit" isLoading={isPending}>Daftar</Button>
          </form>
        </FormProvider>
      </section>
    </section>
  );
}
