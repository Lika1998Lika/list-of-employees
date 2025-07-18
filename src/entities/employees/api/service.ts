import { Api } from "../../../shared/api"
import type { EmployeeType } from "../model/employees.type"

const getEmployees = async () => {
  const response = await Api.get<EmployeeType[]>(`/employees`);
  return response.data
};

const getEmployee = async (id: number) => {
  const response = await Api.get<EmployeeType>(`/employees/${id}`);
  return response.data
}

export const employeesApi = { getEmployee, getEmployees };