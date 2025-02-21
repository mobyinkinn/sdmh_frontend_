import {
  createNewsletter,
  deleteNewsletter,
  fetchNewsletter,
} from "@/app/components/services/api.newsletter.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useNewsletter = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Newsletter"],
    queryFn: fetchNewsletter,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateNewsletter = () => {
  const queryClient = useQueryClient();
  const { mutate: createNewsletters, isPending: isCreating } = useMutation({
    mutationFn: createNewsletter,
    onSuccess: () => {
      queryClient.invalidateQueries(["Newsletter"]);
      toast.success("Newsletter Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Newsletter:", error);
      toast.error("Failed to create Newsletter. Please try again.");
    },
  });

  return { createNewsletters, isCreating };
};

export const useDeleteNewsletter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNewsletter,
    onSuccess: () => {
      queryClient.invalidateQueries(["Newsletter"]);
      toast.success("Newsletter deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Newsletter:", error);
      toast.error("Failed to delete Newsletter. Please try again.");
    },
  });
};
