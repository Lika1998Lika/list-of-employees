import { Api } from "../../../shared/api"
import type { EmployeeType } from "../model/employees.type"

const getEmployee = async (id: number) => {
  const response = await Api.get<EmployeeType>(`/employees/${id}`);
  return response.data
}

export const employeesApi = { getEmployee };