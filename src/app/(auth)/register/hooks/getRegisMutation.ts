import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import api from "@/lib/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";

export type RegisterForm = {
  username: string;
  name: string;
  password: string;
};

export const useRegisterMutation = () => {
  const router = useRouter();
  const {
    mutateAsync: handleRegister,
    isPending,
    isSuccess,
  } = useMutation<void, AxiosError<ApiError>, RegisterForm>({
    mutationFn: async (data: RegisterForm) => {
      await api.post("/user/register", data);
    },
    onSuccess: () => {
      toast.success("Pendaftaran akun berhasil");
      router.push("/login");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Terjadi kesalahan saat mendaftar. Silakan coba lagi."
      );
    },
  });
  return { handleRegister, isPending, isSuccess };
};
