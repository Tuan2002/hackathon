import { getRolesAsync } from "@/services/roles.action";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";

export const useQueryGetRoles = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.GET_ROLES],
    queryFn: getRolesAsync,
  });
  return {
    data: data?.data,
    isLoading,
    error,
  };
};
