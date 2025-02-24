import {
  fetchNewspress,
  createNewspress,
  updateNewspress,
  deleteNewspress,
  updateImage,
  updateBanner,
  fetchNewspressById,
} from "@/app/components/services/api.newspress.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useNewspress = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Newspress"],
    queryFn: fetchNewspress,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateNewspress = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewspresses, isPending: isCreating } = useMutation({
    mutationFn: createNewspress,
    onSuccess: () => {
      queryClient.invalidateQueries(["Newspress"]);
      toast.success("Newspress Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Newspress:", error);
      toast.error("Failed to create Newspress. Please try again.");
    },
  });

  return { createNewspresses, isCreating };
};

export const useDeleteNewspress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNewspress,
    onSuccess: () => {
      queryClient.invalidateQueries(["Newspress"]);
      toast.success("Newspress deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Newspress:", error);
      toast.error("Failed to delete Newspress. Please try again.");
    },
  });
};

export const useUpdateNewspress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNewspress,
    onSuccess: () => {
      queryClient.invalidateQueries(["Newspress"]);
      toast.success("Newspress updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Newspress:", error);
      toast.error("Failed to update Newspress. Please try again.");
    },
  });
};

export const useUpdateNewspressImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Newspress"]);
      toast.success("Newspress image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Newspress image:", error);
      toast.error("Failed to update Newspress image. Please try again.");
    },
  });
};
export const useUpdateNewspressBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Newspress"]);
      toast.success("Newspress banner updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Newspress banner:", error);
      toast.error("Failed to update Newspress banner. Please try again.");
    },
  });
};

export const useNewspressById = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Newspress", id],
    queryFn: () => fetchNewspressById(id),
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
