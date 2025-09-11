import { Api } from "../../../shared/api"
import type { 
  CountryType, 
  EmployeeType, 
  GenderType, 
  PositionType, 
  StaffTagType, 
  TypeContract } from "../model/employees.type"

const getEmployees = async () => {
  const response = await Api.get<EmployeeType[]>(`/employees`);
  return response.data
};

const getEmployee = async (id: number) => {
  const response = await Api.get<EmployeeType>(`/employees/${id}`);
  return response.data
};

const getCountries = async () => {
  const response = await Api.get<CountryType>(`/countries`);
  return response.data
};

const getStaffTags = async () => {
  const response = await Api.get<StaffTagType[]>(`/staff_tags`);
  return response.data
};

const getPositions = async () => {
  const response = await Api.get<PositionType[]>(`/positions`);
  return response.data;
}

const getContracts = async () => {
  return (await Api.get<TypeContract[]>(`/contracts`)).data;
}


const getGenders = async () => {
  return (await Api.get<GenderType[]>(`/genders`)).data;
}
export const employeesApi = { 
  getEmployee, 
  getEmployees, 
  getCountries, 
  getStaffTags, 
  getPositions, 
  getContracts,
  getGenders 
};