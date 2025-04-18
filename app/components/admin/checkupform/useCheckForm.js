import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCheckup, deleteCheckup, fetchCheckup } from "../../services/api.checkupform";

export const useCheckForm = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Checkup"],
    queryFn: fetchCheckup,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateCheckup = () => {
  const queryClient = useQueryClient();
  const { mutate: createCheckups, isPending: isCreating } = useMutation({
    mutationFn: createCheckup,
    onSuccess: () => {
      queryClient.invalidateQueries(["Checkup"]);
      toast.success("Checkup Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Checkup:", error);
      toast.error("Failed to create Checkup. Please try again.");
    },
  });

  return { createCheckups, isCreating };
};

export const useDeleteCheckup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCheckup,
    onSuccess: () => {
      queryClient.invalidateQueries(["Checkup"]);
      toast.success("Checkup deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Checkup:", error);
      toast.error("Failed to delete Checkup. Please try again.");
    },
  });
};
