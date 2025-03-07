import {
  blockTestimonial,
  createTestimonial,
  deleteTestimonial,
  fetchTestimonials,
  unblockTestimonial,
} from "@/app/components/services/apiTestimonial";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useTestimonials = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });
  return { data, isLoading, error };
};

export const useDeleteTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTestimonial,
    onSuccess: () => {
      // Invalidate the "testimonials" query to refresh the table data
      queryClient.invalidateQueries(["testimonials"]);
      toast.success("Testimonial deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete testimonial:", error);
      toast.error("Failed to delete testimonial. Please try again.");
    },
  });
};

export const useBlockTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
      toast.success("Testimonial blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block testimonial:", error);
      toast.error("Failed to block testimonial. Please try again.");
    },
  });
};

export const useUnblockTestimonial = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unblockTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
      toast.success("Testimonial Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock testimonial:", error);
      toast.error("Failed to unblock testimonial. Please try again.");
    },
  });
};

export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();
  const { mutate: createTestimonials, isPending: isCreating } = useMutation({
    mutationFn: createTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries(["Testimonial"]);
      toast.success("Testimonial Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Testimonial:", error);
      toast.error("Failed to create Testimonial. Please try again.");
    },
  });

  return { createTestimonials, isCreating };
};
