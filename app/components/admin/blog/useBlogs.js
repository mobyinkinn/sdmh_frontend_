import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  blockBlog,
  createBlog,
  deleteBlog,
  fetchBlogs,
  unblockBlog,
  updateBlog,
  removeMultiImageFromBlog,
  updateSingleImageFromBlog,
  updateMultiImagesFromBlog,
} from "../../services/api.Blogs";
import toast from "react-hot-toast";

export const useBlogs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Blogs"],
    queryFn: fetchBlogs,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      // Invalidate the "Blogs" query to refresh the table data
      queryClient.invalidateQueries(["blogs"]);
      toast.success("blog deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Blog:", error);
      toast.error("Failed to delete Blog. Please try again.");
    },
  });
};
export const useBlockBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block Blog:", error);
      toast.error("Failed to block Blog. Please try again.");
    },
  });
};
export const useUnblockBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Blog:", error);
      toast.error("Failed to unblock Blog. Please try again.");
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBlog,
    onSuccess: () => {
      // Invalidate the "Blogs" query to refresh the table data
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Blog:", error);
      toast.error("Failed to update Blog. Please try again.");
    },
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  const { mutate: createBlogs, isLoading: isCreating } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("tpa Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create tpa:", error);
      toast.error("Failed to create tpa. Please try again.");
    },
  });

  return { createBlogs, isCreating };
};

export const useDeleteMultiImageFromBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeMultiImageFromBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog multi image deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete blog multi image:", error);
      toast.error("Failed to delete blog multi image. Please try again.");
    },
  });
};

export const useUpdateSingleImageFromBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSingleImageFromBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update blog image:", error);
      toast.error("Failed to update blog image. Please try again.");
    },
  });
};

export const useUpdateMultiImagesFromBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMultiImagesFromBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog multi images updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update blog multi images:", error);
      toast.error("Failed to update blog multi images. Please try again.");
    },
  });
};
