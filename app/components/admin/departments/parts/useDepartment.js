import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  fetchAllDepartments,
  blockDepartment as blockTheDepartment,
  unblockDepartment as unblockTheDepartment,
  deleteDepartment as deleteTheDepartment,
  createDepartment as createTheDepartment,
  editDepartment,
  updateImage as updateTheImage,
  updateHomeImage as updateTheHomeImage,
  updateBanner as updateTheBanner,
  updateMobileBanner as updateTheMobileBanner,
  fetchDepartmentById,
} from "@/app/components/services/api.Department";

export const useDepartment = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Departments"],
    queryFn: fetchAllDepartments,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
export const useDepartmentById = (_id) => {
  return useQuery({
    queryKey: ["Departments", _id],
    queryFn: () => fetchDepartmentById(_id),
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlockDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockTheDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Departments"]);
      toast.success("Department Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Department:", error);
      toast.error("Failed to unblock Department. Please try again.");
    },
  });

  // return { blockDepartment, isBlocking };
};

export const useUnblockDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: unblockDepartment, isLoading: isUnblocking } = useMutation({
    mutationFn: unblockTheDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Departments"]);
      toast.success("Banner Unblocked sucessfully!");
    },
    onError: (error) => {
      console.error("Failed to unblock Banner:", error);
      toast.error("Failed to unblock Banner. Please try again.");
    },
  });

  return { unblockDepartment, isUnblocking };
};

export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteDepartment, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTheDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Departments"]);
      toast.success("Department deleted successfully!");
    },
    onError: (error) => {
      console.error("Failed to delete department: ", error);
      toast.error("Failed to delete department. Please try again.");
    },
  });

  return { deleteDepartment, isDeleting };
};

export const useCreateDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: createDepartment, isPending: isCreating } = useMutation({
    mutationFn: createTheDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Departments"]);
      toast.success("Department created successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to create department: ", error);
      toast.error("Failed to create department. Please try again.");
    },
  });

  return { createDepartment, isCreating };
};

export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();

  const { mutate: updateDepartment, isPending: isUpdating } = useMutation({
    mutationFn: editDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries(["Departments"]);
      toast.success("Department updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update department: ", error);
      toast.error("Failed to update department. Please try again.");
    },
  });

  return { updateDepartment, isUpdating };
};

export const useUpdateImage = () => {
  const queryClient = useQueryClient();

  const { mutate: updateImage, isPending: isUpdatingImage } = useMutation({
    mutationFn: updateTheImage,
    onSuccess: () => {
      queryClient.invalidateQueries(["Departments"]);
      toast.success("Department updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update department: ", error);
      toast.error("Failed to update department. Please try again.");
    },
  });

  return { updateImage, isUpdatingImage };
};

export const useUpdateHomeImage = () => {
  const queryClient = useQueryClient();

  const { mutate: updateHomeImage, isPending: isUpdatingHomeImage } =
    useMutation({
      mutationFn: updateTheHomeImage,
      onSuccess: () => {
        queryClient.invalidateQueries(["Departments"]);
        toast.success("Department updated successfully!!!");
      },
      onError: (error) => {
        console.error("Failed to update department: ", error);
        toast.error("Failed to update department. Please try again.");
      },
    });

  return { updateHomeImage, isUpdatingHomeImage };
};

export const useBannerImage = () => {
  const queryClient = useQueryClient();

  const { mutate: updateBanner, isPending: isUpdatingBanner } = useMutation({
    mutationFn: updateTheBanner,
    onSuccess: () => {
      queryClient.invalidateQueries(["Departments"]);
      toast.success("Department updated successfully!!!");
    },
    onError: (error) => {
      console.error("Failed to update department: ", error);
      toast.error("Failed to update department. Please try again.");
    },
  });

  return { updateBanner, isUpdatingBanner };
};

export const useMobileBannerImage = () => {
  const queryClient = useQueryClient();

  const { mutate: updateMobileBanner, isPending: isUpdatingMobileBanner } =
    useMutation({
      mutationFn: updateTheMobileBanner,
      onSuccess: () => {
        queryClient.invalidateQueries(["Departments"]);
        toast.success("Department updated successfully!!!");
      },
      onError: (error) => {
        console.error("Failed to update department: ", error);
        toast.error("Failed to update department. Please try again.");
      },
    });

  return { updateMobileBanner, isUpdatingMobileBanner };
};
