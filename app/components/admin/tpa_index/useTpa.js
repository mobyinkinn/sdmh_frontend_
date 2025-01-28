import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  blockTpa,
  createTpa,
  deleteTpa,
  fetchTpa,
  unblockTpa,
  updateTpa,
  updateLogo as updateTheLogo,
} from "../../services/api.Tpa";

export const useTpa = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tpa"],
    queryFn: fetchTpa,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useDeleteTpa = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTpa,
    onSuccess: () => {
      // Invalidate the "Blogs" query to refresh the table data
      queryClient.invalidateQueries(["tpa"]);
      toast.success("tpa deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete tpa:", error);
      toast.error("Failed to delete tpa. Please try again.");
    },
  });
};

export const useBlockTpa = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockTpa,
    onSuccess: () => {
      queryClient.invalidateQueries(["tpa"]);
      toast.success("tpa blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block tpa:", error);
      toast.error("Failed to block tpa. Please try again.");
    },
  });
};

export const useUnblockTpa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockTpa,
    onSuccess: () => {
      queryClient.invalidateQueries(["tpa"]);
      toast.success("tpa Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock tpa:", error);
      toast.error("Failed to unblock tpa. Please try again.");
    },
  });
};

export const useUpdateTpa = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTpa,
    onSuccess: () => {
      // Invalidate the "Blogs" query to refresh the table data
      queryClient.invalidateQueries(["tpa"]);
      toast.success("tpa updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update tpa:", error);
      toast.error("Failed to update tpa. Please try again.");
    },
  });
};

export const useCreateTpa = () => {
  const queryClient = useQueryClient();
  const { mutate: createTpas, isPending: isCreating } = useMutation({
    mutationFn: createTpa,
    onSuccess: () => {
      queryClient.invalidateQueries(["tpa"]);
      toast.success("tpa Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create tpa:", error);
      toast.error("Failed to create tpa. Please try again.");
    },
  });

  return { createTpas, isCreating };
};

export const useUpdateLogo = () => {
  const queryClient = useQueryClient();
  const { mutate: updateLogo, isPending: isUpdatingLogo } = useMutation({
    mutationFn: updateTheLogo,
    onSuccess: () => {
      queryClient.invalidateQueries(["tpa"]);
      toast.success("Logo updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update tpa:", error);
      toast.error("Failed to update tpa. Please try again.");
    },
  });

  return { updateLogo, isUpdatingLogo };
};
