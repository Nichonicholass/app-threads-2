import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import api from "@/lib/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import useAuthStore from "@/store/useAuthStore";
import { setToken } from "@/lib/cookies";
import { UserType } from "@/types/entities/user";
import { ApiResponseUser } from "@/types/api";


export type LoginForm = {
  name: string;
  password: string;
};

export const useLoginMutation = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const {
    mutateAsync: handleRegister,
    isPending,
    isSuccess,
  } = useMutation<void, AxiosError<ApiError>, LoginForm>({
    mutationFn: async (data: LoginForm) => {
      const response = await api.post("/user/login", data);
      const accessToken = response.data.data.token;
      setToken(accessToken);

      const user = await api.get<ApiResponseUser<UserType>>("/user/me",{
        headers: {
            Authorization: `Bearer ${accessToken}`,
          },
      });
      if (!user.data.user) {
        throw new Error("Sesi login tidak valid");
      }

      login({ ...user.data.user, token: accessToken });
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
