import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchVideos,
  updateVideo,
  createVideo,
  deleteVideo,
} from "../../services/api.videos";
import toast from "react-hot-toast";

export const useVideos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Videos"],
    queryFn: fetchVideos,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useUpdateVideo = () => {
  const queryClient = useQueryClient();

  const { mutate: updateVideos, isLoading: isUpdating } = useMutation({
    mutationFn: updateVideo,
    onSuccess: () => {
      toast.success("Videos updated successfully");
      queryClient.invalidateQueries(["Videos"]);
    },
    onError: (error) => {
      toast.error("Failed to update videos. Please try again.");
      console.error("Failed to update videos:", error);
    },
  });
  return { updateVideos, isUpdating };
};

export const useDeleteVideo = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteVideos, isLoading: isDeleting } = useMutation({
    mutationFn: deleteVideo,
    onSuccess: () => {
      toast.success("Video deleted successfully");
      queryClient.invalidateQueries(["Videos"]);
    },
    onError: (error) => {
      toast.error("Failed to delete video. Please try again.");
      console.error("Failed to delete video:", error);
    },
  });
  return { deleteVideos, isDeleting };
};

export const useCreateVideo = () => {
  const queryClient = useQueryClient();

  const { mutate: createVideos, isLoading: isCreating } = useMutation({
    mutationFn: createVideo,
    onSuccess: () => {
      toast.success("Video created successfully");
      queryClient.invalidateQueries(["Videos"]);
    },
    onError: (error) => {
      toast.error("Failed to create video. Please try again.");
      console.error("Failed to create video:", error);
    },
  });
  return { createVideos, isCreating };
};
