import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  blockBanner,
  deleteBanner,
  createBanner,
  fetchBanners,
  unblockBanner,
  updateBanner,
  fetchBannerByPage,
} from "@/app/components/services/api.Banner";

export const useBanner = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["banner"],
    queryFn: fetchBanners,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
export const useBannerByPage = (page) => {
  return useQuery({
    queryKey: ["banner", page],
    queryFn: () => fetchBannerByPage(page),
    staleTime: 5 * 60 * 1000,
  });
};

export const useDeleteBanner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Banners"]);
      toast.success("Banner deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Banner:", error);
      toast.error("Failed to delete Banner. Please try again.");
    },
  });
};
export const useBlockBanners = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Banners"]);
      toast.success("Banner blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block Banner:", error);
      toast.error("Failed to block Banner. Please try again.");
    },
  });
};
export const useUnblockBanners = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Banners"]);
      toast.success("Banner Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Banner:", error);
      toast.error("Failed to unblock Banner. Please try again.");
    },
  });
};
export const useCreateBanner = () => {
  const queryClient = useQueryClient();

  const { mutate: createBanners, isPending: isCreating } = useMutation({
    mutationFn: createBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Banners"]);
      toast.success("tpa Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create tpa:", error);
      toast.error("Failed to create tpa. Please try again.");
    },
  });

  return { createBanners, isCreating };
};
export const useUpdateBanner = () => {
  const queryClient = useQueryClient();

  const { mutate: updateBanners, isPending: isUpdating } = useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Banners"]);
      toast.success("Banner updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Banner:", error);
      toast.error("Failed to update Banner. Please try again.");
    },
  });

  return { updateBanners, isUpdating };
};
