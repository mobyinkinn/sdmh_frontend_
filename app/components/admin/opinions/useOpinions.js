import {
  createOpinion,
  deleteOpinion,
  fetchOpinion,
} from "@/app/components/services/api.opinion.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useOpinion = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Opinion"],
    queryFn: fetchOpinion,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateOpinion = () => {
  const queryClient = useQueryClient();
  const { mutate: createOpinions, isPending: isCreating } = useMutation({
    mutationFn: createOpinion,
    onSuccess: () => {
      queryClient.invalidateQueries(["Opinion"]);
      toast.success("Opinion Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Opinion:", error);
      toast.error("Failed to create Opinion. Please try again.");
    },
  });

  return { createOpinions, isCreating };
};

export const useDeleteOpinion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteOpinion,
    onSuccess: () => {
      queryClient.invalidateQueries(["Opinion"]);
      toast.success("Opinion deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Opinion:", error);
      toast.error("Failed to delete Opinion. Please try again.");
    },
  });
};
