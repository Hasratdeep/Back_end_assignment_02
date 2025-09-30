import { employees , Employee } from "./services/employeeService";

//Get all employees
export const getAllEmployees = (): Employee[] => {
  return employees;
};

//Get employee by id 
export const getEmployeeById = (id: number): Employee[] => {
  return employees.find(id);
};

//create employee
export const createEmployee = (id: number, createEmployee: any): Employee => {
    return employees;
};

// update employee
export const updatedEmployee = (id: number): Employee => {
    return employees;
};

// delete employee
export const deleteEmployee = (id: number, deleteEmployee: unknown): Employee => {
    return employees;
};

export function updateEmployee(id: number, updatedData: any) {
    throw new Error("Function not implemented.");
}
export { Employee };

