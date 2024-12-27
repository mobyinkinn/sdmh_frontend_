import { fetchOpening } from "@/app/components/services/apiOpening";
import { useQuery } from "@tanstack/react-query";

export const useOpening = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Careers"],
    queryFn: fetchOpening,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  });
  return { data, isLoading, error };
};
