import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  fetchDownloadables,
  deleteDownloadables as deleteTheDownloadables,
  createDownloadables as createTheDownloadables,
  updateDownloadables as updateTheDownloadable,
  updateFile as updateTheFile,
} from "../../services/api.donwload";

export const useDownloadables = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Downloadables"],
    queryFn: fetchDownloadables,
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, error };
};

export const useUpdateDownloadables = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDownloadables, isPending: isUpdating } = useMutation({
    mutationFn: updateTheDownloadable,
    onSuccess: () => {
      queryClient.invalidateQueries(["Downloadables"]);
      toast.success("Downloadable updated sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to update downloadable:", error);
      toast.error("Failed to update downloadable. Please try again.");
    },
  });

  return { updateDownloadables, isUpdating };
};
export const useUpdateDownloadablesImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTheFile,
    onSuccess: () => {
      queryClient.invalidateQueries(["Downloadables"]);
      toast.success("Downloadable image updated sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to update downloadable image:", error);
      toast.error("Failed to update downloadable image. Please try again.");
    },
  });
};

export const useCreateDownloadable = () => {
  const queryClient = useQueryClient();

  const { mutate: createDownloadables, isPending: isCreating } = useMutation({
    mutationFn: createTheDownloadables,
    onSuccess: () => {
      queryClient.invalidateQueries(["Downloadables"]);
      toast.success("Downloadable created sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to create downloadable:", error);
      toast.error("Failed to create downloadable. Please try again.");
    },
  });

  return { createDownloadables, isCreating };
};

export const useDeleteDownloadables = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteDownloadables, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheDownloadables,
    onSuccess: () => {
      queryClient.invalidateQueries(["Downloadables"]);
      toast.success("Downloadable deleted sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to delete downloadable:", error);
      toast.error("Failed to delete downloadable. Please try again.");
    },
  });
  return { deleteDownloadables, isDeleting };
};
