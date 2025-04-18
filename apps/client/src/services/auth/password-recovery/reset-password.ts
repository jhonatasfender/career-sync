import { axios } from "@career-sync/client/libs/axios";
import type { ResetPasswordDto } from "@reactive-resume/dto";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

export const resetPassword = async (data: ResetPasswordDto) => {
  return await axios.post<undefined, AxiosResponse<undefined>, ResetPasswordDto>(
    "/auth/reset-password",
    data,
  );
};

export const useResetPassword = () => {
  const {
    error,
    isPending: loading,
    mutateAsync: resetPasswordFn,
  } = useMutation({
    mutationFn: resetPassword,
  });

  return { resetPassword: resetPasswordFn, loading, error };
};
