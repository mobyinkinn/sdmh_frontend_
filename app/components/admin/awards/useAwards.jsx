import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAwards,
  deleteAward,
  updateAward,
  updateAwardImage,
  createAward,
  fetchAwardById,
  updateMultiImagesFromAward,
  updateBanner,
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

export const useAwardById = (id) => {
  return useQuery({
    queryKey: ["Awards", id],
    queryFn: () => fetchAwardById(id),
    staleTime: 5 * 60 * 1000,
  });
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

export const useUpdateAwardBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Awards"]);
      toast.success("Award banner updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Award banner:", error);
      toast.error("Failed to update Award banner. Please try again.");
    },
  });
};

export const useUpdateMultiImagesFromAward = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMultiImagesFromAward,
    onSuccess: () => {
      queryClient.invalidateQueries(["Awards"]);
      toast.success("Award multi images updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Award multi images:", error);
      toast.error("Failed to update Award multi images. Please try again.");
    },
  });
};
