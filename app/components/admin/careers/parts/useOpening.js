import { blockOpening, createOpening, deleteOpening, fetchOpening, fetchOpeningById, unblockOpening, updateOpening } from "@/app/components/services/apiOpening";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useOpening = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Opening"],
    queryFn: fetchOpening,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });
  return { data, isLoading, error };
};
export const useOpeningById = (_id) => {
  return useQuery({
    queryKey: ["Opening", _id],
    queryFn: () => fetchOpeningById(_id), 
    staleTime: 5 * 60 * 1000, 
  });
};

export const useDeleteOpening = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteOpening,
    onSuccess: () => {
      // Invalidate the "Blogs" query to refresh the table data
      queryClient.invalidateQueries(["Opening"]);
      toast.success("Opening deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Opening:", error);
      toast.error("Failed to delete Opening. Please try again.");
    },
  });
};
export const useBlockOpening = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockOpening,
    onSuccess: () => {
      queryClient.invalidateQueries(["Opening"]);
      toast.success("Opening blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block Opening:", error);
      toast.error("Failed to block Opening. Please try again.");
    },
  });
};
export const useUnblockOpening = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockOpening,
    onSuccess: () => {
      queryClient.invalidateQueries(["Opening"]);
      toast.success("Opening Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Opening:", error);
      toast.error("Failed to unblock Opening. Please try again.");
    },
  });
};

export const useUpdateOpening = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOpening,
    onSuccess: () => {
      // Invalidate the "Blogs" query to refresh the table data
      queryClient.invalidateQueries(["Opening"]);
      toast.success("Opening updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Opening:", error);
      toast.error("Failed to update Opening. Please try again.");
    },
  });
};

export const useCreateOpening = () => {
  const queryClient = useQueryClient();
  const { mutate: createOpenings, isLoading: isCreating } = useMutation({
    mutationFn: createOpening,
    onSuccess: () => {
      queryClient.invalidateQueries(["Opening"]);
      toast.success("Opening Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Opening:", error);
      toast.error("Failed to create Opening. Please try again.");
    },
  });

  return { createOpenings, isCreating };
};

