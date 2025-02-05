import {
  createNavbar,
  deleteNavbar,
  fetchNavbar,
  updateNavbar,
} from "@/app/components/services/api.navbar.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useNavbar = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Navbar"],
    queryFn: fetchNavbar,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useCreateNavbar = () => {
  const queryClient = useQueryClient();
  const { mutate: createNavbars, isPending: isCreating } = useMutation({
    mutationFn: createNavbar,
    onSuccess: () => {
      queryClient.invalidateQueries(["Navbar"]);
      toast.success("Navbar Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Navbar:", error);
      toast.error("Failed to create Navbar. Please try again.");
    },
  });

  return { createNavbars, isCreating };
};

export const useDeleteNavbar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNavbar,
    onSuccess: () => {
      queryClient.invalidateQueries(["Navbar"]);
      toast.success("Navbar deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Navbar:", error);
      toast.error("Failed to delete Navbar. Please try again.");
    },
  });
};

export const useUpdateNavbar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNavbar,
    onSuccess: () => {
      queryClient.invalidateQueries(["Navbar"]);
      toast.success("Navbar updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Navbar:", error);
      toast.error("Failed to update Navbar. Please try again.");
    },
  });
};
