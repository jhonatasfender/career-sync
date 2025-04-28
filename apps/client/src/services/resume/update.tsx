import { t } from "@lingui/core/macro";
import type { ResumeDto, UpdateResumeDto } from "@reactive-resume/dto";
import { ErrorMessage } from "@reactive-resume/utils";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { AxiosError } from "axios";
import debounce from "lodash.debounce";

import { useToast } from "@career-sync/client/hooks/use-toast";
import { axios } from "@career-sync/client/libs/axios";

export const updateResume = async (data: UpdateResumeDto) => {
  try {
    const response = await axios.patch<ResumeDto, AxiosResponse<ResumeDto>, UpdateResumeDto>(
      `/resume/${data.id}`,
      data,
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data?.message || ErrorMessage.ResumeNotFound;
      throw new Error(message);
    }
    throw new Error(ErrorMessage.ResumeNotFound);
  }
};

export const debouncedUpdateResume = debounce(updateResume, 500);

export const useUpdateResume = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: updateResume,
    onError: (error: Error) => {
      toast({
        variant: "error",
        title: t`Error`,
        description: error.message,
      });
    },
  });
};
