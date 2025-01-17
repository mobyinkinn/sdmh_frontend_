import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCheckup,
  deleteCheckup,
  fetchCheckup,
  blockCheckup,
  unblockCheckup,
  updateCheckup,
  updateImage,
  updateBanner,
  fetchCheckupById,
} from "../../services/api.checkup";
import toast from "react-hot-toast";

export const useCheckups = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Checkups"],
    queryFn: fetchCheckup,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCheckupById = (id) => {
  return useQuery({
    queryKey: ["Checkups", id],
    queryFn: () => fetchCheckupById(id),
    staleTime: 5 * 60 * 1000,
  });
};

export const useDeleteCheckup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCheckup,
    onSuccess: () => {
      // Invalidate the "Checkups" query to refresh the table data
      queryClient.invalidateQueries(["checkups"]);
      toast.success("checkup deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Checkup:", error);
      toast.error("Failed to delete Checkup. Please try again.");
    },
  });
};

export const useBlockCheckup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockCheckup,
    onSuccess: () => {
      queryClient.invalidateQueries(["checkups"]);
      toast.success("Checkup blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block Checkup:", error);
      toast.error("Failed to block Checkup. Please try again.");
    },
  });
};
export const useUnblockCheckup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockCheckup,
    onSuccess: () => {
      queryClient.invalidateQueries(["checkups"]);
      toast.success("Checkup Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Checkup:", error);
      toast.error("Failed to unblock Checkup. Please try again.");
    },
  });
};

export const useUpdateCheckup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCheckup,
    onSuccess: () => {
      // Invalidate the "Checkups" query to refresh the table data
      queryClient.invalidateQueries(["checkups"]);
      toast.success("Checkup updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Checkup:", error);
      toast.error("Failed to update Checkup. Please try again.");
    },
  });
};
export const useUpdateCheckupImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateImage,
    onSuccess: () => {
      // Invalidate the "Checkups" query to refresh the table data
      queryClient.invalidateQueries(["checkups"]);
      toast.success("Checkup image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Checkup image:", error);
      toast.error("Failed to update Checkup image. Please try again.");
    },
  });
};
export const useUpdateCheckupBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      // Invalidate the "Checkups" query to refresh the table data
      queryClient.invalidateQueries(["checkups"]);
      toast.success("Checkup banner updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Checkup banner:", error);
      toast.error("Failed to update Checkup banner. Please try again.");
    },
  });
};

export const useCreateCheckup = () => {
  const queryClient = useQueryClient();
  const { mutate: createCheckups, isLoading: isCreating } = useMutation({
    mutationFn: createCheckup,
    onSuccess: () => {
      queryClient.invalidateQueries(["checkups"]);
      toast.success("Checkup Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Checkup:", error);
      toast.error("Failed to create Checkup. Please try again.");
    },
  });

  return { createCheckups, isCreating };
};
