import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { employeesApi } from "./service";

const useEmployeesQuery = () => {
  return useQuery({
    queryKey: ['empl'],
    queryFn: () => employeesApi.getEmployees(),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  })
};

const useEmployeeQuery = (id: number) => {
  return useQuery({
    queryKey: ['empl'],
    queryFn: () => employeesApi.getEmployee(id),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  })
};

const useContryQuery = () => {
  return useQuery({
    queryKey: ['contry'],
    queryFn: () => employeesApi.getCountries(),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  })
}

const useStaffTags = () => {
  return useQuery({
    queryKey: ['staff_tags'],
    queryFn: () => employeesApi.getStaffTags(),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  })
}

export {useEmployeeQuery, useEmployeesQuery, useContryQuery, useStaffTags};