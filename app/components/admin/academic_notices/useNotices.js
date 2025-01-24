"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  blockNotices,
  createNotices,
  deleteNotices,
  fetchNotices,
  unblockNotices,
  updateNotice,
  updateNoticeFile,
} from "../../services/api.Notices";

export const useNotices = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notices"],
    queryFn: fetchNotices,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
export const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNotices,
    onSuccess: () => {
      queryClient.invalidateQueries(["notices"]);
      toast.success("notice deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete notice:", error);
      toast.error("Failed to delete notice. Please try again.");
    },
  });
};
export const useBlockNotices = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockNotices,
    onSuccess: () => {
      queryClient.invalidateQueries(["notices"]);
      toast.success("notice blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block notice:", error);
      toast.error("Failed to block notice. Please try again.");
    },
  });
};
export const useUnblockNotices = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockNotices,
    onSuccess: () => {
      queryClient.invalidateQueries(["notices"]);
      toast.success("notice Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock notice:", error);
      toast.error("Failed to unblock notice. Please try again.");
    },
  });
};

export const useCreateNotice = () => {
  const queryClient = useQueryClient();

  const { mutate: createNotice, isPending: isCreating } = useMutation({
    mutationFn: createNotices,
    onSuccess: () => {
      queryClient.invalidateQueries(["notices"]);
      toast.success("tpa Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create tpa:", error);
      toast.error("Failed to create tpa. Please try again.");
    },
  });

  return { createNotice, isCreating };
};

export const useUpdateName = () => {
  const queryClient = useQueryClient();

  const { mutate: updateName, isPending: isUpdating } = useMutation({
    mutationFn: updateNotice,
    onSuccess: () => {
      // Invalidate the "Blogs" query to refresh the table data
      queryClient.invalidateQueries(["notices"]);
      toast.success("Notice updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update notice:", error);
      toast.error("Failed to update notice. Please try again.");
    },
  });

  return { updateName, isUpdating };
};

export const useUpdateNameFile = () => {
  const queryClient = useQueryClient();

  const { mutate: updateFile, isPending: isUpdatingFile } = useMutation({
    mutationFn: updateNoticeFile,
    onSuccess: () => {
      // Invalidate the "Blogs" query to refresh the table data
      queryClient.invalidateQueries(["notices"]);
      toast.success("Notice updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update notice:", error);
      toast.error("Failed to update notice. Please try again.");
    },
  });

  return { updateFile, isUpdatingFile };
};
