import { blockCareers, createData, deleteCareers, fetchCareers, unblockCareers } from "@/app/components/services/apiCareer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCareers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Careers"],
    queryFn: fetchCareers,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });
  return { data, isLoading, error };
};

export const useDeleteCareers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCareers,
    onSuccess: () => {
      // Invalidate the "Careers" query to refresh the table data
      queryClient.invalidateQueries(["Careers"]);
      toast.success("Careers deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Careers:", error);
      toast.error("Failed to delete Careers. Please try again.");
    },
  });
};

export const useBlockCareers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockCareers,
    onSuccess: () => {
      queryClient.invalidateQueries(["Careers"]);
      toast.success("Careers blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block Careers:", error);
      toast.error("Failed to block Careers. Please try again.");
    },
  });
};

export const useUnblockCareers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockCareers,
    onSuccess: () => {
      queryClient.invalidateQueries(["Careers"]);
      toast.success("Careers Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Careers:", error);
      toast.error("Failed to unblock Careers. Please try again.");
    },
  });
};

export const useCreateData = () => {
  const queryClient = useQueryClient();
  const { mutate: createDatas, isLoading: isCreating } = useMutation({
    mutationFn: createData,
    onSuccess: () => {
      queryClient.invalidateQueries(["Careers"]);
      toast.success("Careers data Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Careers:", error);
      toast.error("Failed to create Careers. Please try again.");
    },
  });

  return { createDatas, isCreating };
};