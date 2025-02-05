import {
  createEnquiry,
  deleteEnquiry,
  fetchEnquiry,
} from "@/app/components/services/api.Enquiry";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateEnquiry = () => {
  const queryClient = useQueryClient();
  const { mutate: createEnquiries, isLoading: isCreating } = useMutation({
    mutationFn: createEnquiry,
    onSuccess: () => {
      queryClient.invalidateQueries(["Enquiry"]);
      toast.success("Enquiry data Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Enquiry:", error);
      toast.error("Failed to create Enquiry. Please try again.");
    },
  });

  return { createEnquiries, isCreating };
};

export const useDeleteEnquiry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEnquiry,
    onSuccess: () => {
      // Invalidate the "Careers" query to refresh the table data
      queryClient.invalidateQueries(["Enquiry"]);
      toast.success("Enquiry deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Enquiry:", error);
      toast.error("Failed to delete Enquiry. Please try again.");
    },
  });
};

export const useEnquiry = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Enquiry"],
    queryFn: fetchEnquiry,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });
  return { data, isLoading, error };
};
