import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchEvents,
  deleteEvent,
  updateEvent,
  createEvent,
  addImagesToEvent,
  removeImageFromEvent,
  updateSingleImageFromEvent,
  fetchEventById,
} from "../../services/api.events";
import toast from "react-hot-toast";

export const useEvents = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Events"],
    queryFn: fetchEvents,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Events"]);
      toast.success("Event deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete Event:", error);
      toast.error("Failed to delete Event. Please try again.");
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Events"]);
      toast.success("Event updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update Event:", error);
      toast.error("Failed to update Event. Please try again.");
    },
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  const { mutate: createEvents, isPending: isCreating } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Events"]);
      toast.success("Event Created successfully!");
    },
    onError: (error) => {
      console.error("Failed to create Event:", error);
      toast.error("Failed to create Event. Please try again.");
    },
  });

  return { createEvents, isCreating };
};

export const useAddImagesToEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addImagesToEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Events"]);
      toast.success("Event images added successfully!");
    },
    onError: (error) => {
      console.error("Failed to add events images:", error);
      toast.error("Failed to add events images. Please try again.");
    },
  });
};

export const useDeleteImageFromEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeImageFromEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Events"]);
      toast.success("Event image deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete event image:", error);
      toast.error("Failed to delete event image. Please try again.");
    },
  });
};

export const useUpdateSingleImageFromEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSingleImageFromEvent,
    onSuccess: () => {
      queryClient.invalidateQueries(["Events"]);
      toast.success("Event image updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update event image:", error);
      toast.error("Failed to update event image. Please try again.");
    },
  });
};

export const useEventById = (id) => {
  return useQuery({
    queryKey: ["Events", id],
    queryFn: () => fetchEventById(id),
    staleTime: 5 * 60 * 1000,
  });
};
