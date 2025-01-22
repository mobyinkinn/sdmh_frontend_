"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  fetchPages,
  createPage,
  updatePage,
  deletePage,
} from "../../services/api.Pages";

export const usePages = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pages"],
    queryFn: fetchPages,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreatePage = () => {
  const queryClient = useQueryClient();

  const { mutate: createPages, isLoading: isCreating } = useMutation({
    mutationFn: createPage,
    onSuccess: () => {
      queryClient.invalidateQueries(["pages"]);
      toast.success("page Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create page:", error);
      toast.error("Failed to create page. Please try again.");
    },
  });

  return { createPages, isCreating };
};

export const useDeletePage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePage,
    onSuccess: () => {
      queryClient.invalidateQueries(["pages"]);
      toast.success("page deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete page:", error);
      toast.error("Failed to delete page. Please try again.");
    },
  });
};

export const useUpdatePage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePage,
    onSuccess: () => {
      queryClient.invalidateQueries(["pages"]);
      toast.success("page updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update page:", error);
      toast.error("Failed to update page. Please try again.");
    },
  });
};
