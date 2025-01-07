import { fetchPages } from "@/app/components/services/api.Pages";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const usePages = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Page"],
    queryFn: fetchPages,
    staleTime: 5 * 60 * 1000,
  });
  return { data, isLoading, error };
};
