import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAwards,
  deleteAward,
  updateAward,
  updateAwardImage,
  createAward,
} from "../../services/api.awards";
import toast from "react-hot-toast";

export const useAwards = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Awards"],
    queryFn: fetchAwards,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useDeleteAward = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAward,
    onSuccess: () => {
      queryClient.invalidateQueries(["Awards"]);
      toast.success("Award deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Award:", error);
      toast.error("Failed to delete Award. Please try again.");
    },
  });
};

export const useUpdateAward = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAward,
    onSuccess: () => {
      queryClient.invalidateQueries(["Awards"]);
      toast.success("Award updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Award:", error);
      toast.error("Failed to update Award. Please try again.");
    },
  });
};

export const useUpdateAwardImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAwardImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Awards"]);
      toast.success("Award image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Award image:", error);
      toast.error("Failed to update Award image. Please try again.");
    },
  });
};

export const useCreateAward = () => {
  const queryClient = useQueryClient();
  const { mutate: createAwards, isPending: isCreating } = useMutation({
    mutationFn: createAward,
    onSuccess: () => {
      queryClient.invalidateQueries(["Awards"]);
      toast.success("Award Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Award:", error);
      toast.error("Failed to create Award. Please try again.");
    },
  });

  return { createAwards, isCreating };
};
