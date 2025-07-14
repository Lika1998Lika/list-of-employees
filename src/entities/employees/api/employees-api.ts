import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { employeesApi } from "./service"

const useEmployeeQuery = (id: number) => {
  return useQuery({
    queryKey: ['empl'],
    queryFn: () => employeesApi.getEmployee(id),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  })
}

export {useEmployeeQuery}