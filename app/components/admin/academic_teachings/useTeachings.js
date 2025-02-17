"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  blockTeachings,
  createTeachings,
  deleteTeachings,
  fetchTeachings,
  unblockTeachings,
  updateTeaching,
  updateTeachingFile,
} from "../../services/api.Teachings";

export const useTeachings = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["teachings"],
    queryFn: fetchTeachings,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
export const useDeleteTeaching = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTeachings,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachings"]);
      toast.success("teaching deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete teaching:", error);
      toast.error("Failed to delete teaching. Please try again.");
    },
  });
};
export const useBlockTeachings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockTeachings,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachings"]);
      toast.success("teaching blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block teaching:", error);
      toast.error("Failed to block teaching. Please try again.");
    },
  });
};
export const useUnblockTeachings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockTeachings,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachings"]);
      toast.success("teaching Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock teaching:", error);
      toast.error("Failed to unblock teaching. Please try again.");
    },
  });
};

export const useCreateTeaching = () => {
  const queryClient = useQueryClient();

  const { mutate: createTeaching, isPending: isCreating } = useMutation({
    mutationFn: createTeachings,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachings"]);
      toast.success("teaching Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create teaching:", error);
      toast.error("Failed to create teaching. Please try again.");
    },
  });

  return { createTeaching, isCreating };
};

export const useUpdateTeaching = () => {
  const queryClient = useQueryClient();

  const { mutate: updatedTeaching, isPending: isUpdating } = useMutation({
    mutationFn: updateTeaching,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachings"]);
      toast.success("Teaching updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update teaching:", error);
      toast.error("Failed to update teaching. Please try again.");
    },
  });

  return { updatedTeaching, isUpdating };
};

export const useUpdateNameFile = () => {
  const queryClient = useQueryClient();

  const { mutate: updateFile, isPending: isUpdatingFile } = useMutation({
    mutationFn: updateTeachingFile,
    onSuccess: () => {
      queryClient.invalidateQueries(["teachings"]);
      toast.success("Teaching updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update teaching:", error);
      toast.error("Failed to update teaching. Please try again.");
    },
  });

  return { updateFile, isUpdatingFile };
};
