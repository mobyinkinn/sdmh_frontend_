import {
  fetchDoctors,
  blockDoctor as blockTheDoctor,
  unblockDoctor as unblockTheDoctor,
  deleteDoctor as deleteTheDoctor,
  updateDoctor as updateTheDoctor,
  updateImage as updateTheImage,
  createDoctor as createTheDoctor,
  fetchDoctorById,
  updateDoctorsOrder,
  fetchDoctorBy,
  fetchDoctorByID,
} from "@/app/components/services/api.Doctor";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDoctors = (page) => {
  return useQuery({
    queryKey: ["Doctors", page], // Include page in query key to refetch on page change
    queryFn: () => fetchDoctors({ page, limit: 5 }), // Fetching paginated data
    keepPreviousData: true, // Enables smooth pagination by keeping old data while fetching new
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlockDoctor = () => {
  const queryClient = useQueryClient();

  const { mutate: blockDoctor, isLoading: isBlocking } = useMutation({
    mutationFn: blockTheDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries(["Doctors"]);
      toast.success("Doctor blocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to block the doctor: ", error);
      toast.error("Failed to block doctor. Please try again!!!");
    },
  });

  return { blockDoctor, isBlocking };
};

export const useUnblockDoctor = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockDoctor, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries(["Doctors"]);
      toast.success("Doctor unblocked successfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock the doctor: ", error);
      toast.error("Failed to unblock doctor. Please try again!!!");
    },
  });
  return { unblockDoctor, isUnblocking };
};

export const useDeleteDoctor = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteDoctor, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries(["Doctors"]);
      toast.success("Doctor deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete the doctor: ", error);
      toast.error("Failed to delete doctor. Please try again!!!");
    },
  });
  return { deleteDoctor, isDeleting };
};

export const useUpdateDoctor = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDoctor, isPending: isUpdating } = useMutation({
    mutationFn: updateTheDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries(["Doctors"]);
      toast.success("Doctor updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to updated the doctor: ", error);
      toast.error("Failed to updated doctor. Please try again!!!");
    },
  });

  return { updateDoctor, isUpdating };
};

export const useUpdateImage = () => {
  const queryClient = useQueryClient();

  const { mutate: updateImage, isPending: isUpdatingImage } = useMutation({
    mutationFn: updateTheImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Doctors"]);
      toast.success("Doctor updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to updated the doctor: ", error);
      toast.error("Failed to updated doctor. Please try again!!!");
    },
  });

  return { updateImage, isUpdatingImage };
};

export const useCreateDoctor = () => {
  const queryClient = useQueryClient();

  const { mutate: createDoctor, isPending: isCreating } = useMutation({
    mutationFn: createTheDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries(["Doctors"]);
      toast.success("Doctor created successfully!");
    },
    onError: (error) => {
      console.error("Failed to created the doctor: ", error);
      toast.error("Failed to created doctor. Please try again!!!");
    },
  });

  return { createDoctor, isCreating };
};

export const useDoctorById = (_id) => {
  return useQuery({
    queryKey: ["Doctor", _id],
    queryFn: () => fetchDoctorBy(_id),
    staleTime: 5 * 60 * 1000,
  });
};


export const useDoctorByID = (_id) => {
  return useQuery({
    queryKey: ["Doctor", _id],
    queryFn: () => fetchDoctorByID(_id),
    staleTime: 5 * 60 * 1000,
  });
};

export const useUpdateDoctorsOrder = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDoctorOrder, isPending: isOrderUpdating } = useMutation(
    {
      mutationFn: updateDoctorsOrder,
      onSuccess: () => {
        queryClient.invalidateQueries(["Doctors"]);
        toast.success("Doctor updated successfully!");
      },
      onError: (error) => {
        console.error("Failed to updated the doctor: ", error);
        toast.error("Failed to updated doctor. Please try again!!!");
      },
    }
  );

  return { updateDoctorOrder, isOrderUpdating };
};
