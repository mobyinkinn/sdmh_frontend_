import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  fetchAllDepartments,
  blockDepartment as blockTheDepartment,
  unblockDepartment as unblockTheDepartment,
} from "@/app/components/services/api.Department";

export const useDepartment = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["departments"],
    queryFn: fetchAllDepartments,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useBlockDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: blockDepartment, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Banners"]);
      toast.success("Banner Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Banner:", error);
      toast.error("Failed to unblock Banner. Please try again.");
    },
  });

  return { blockDepartment, isBlocking };
};

export const useUnblockDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockDepartment, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Banners"]);
      toast.success("Banner Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Banner:", error);
      toast.error("Failed to unblock Banner. Please try again.");
    },
  });

  return { unblockDepartment, isUnblocking };
};
