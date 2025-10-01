import { Employee, employees } from "../services/employeesService";

//Get all employees
export const getAllEmployees = (): Employee[] => {
  return employees;
};

//Get employee by id 
export const getEmployeeById = (id: number): Employee[] => {
  return Employee;
};

//create employee
export const createEmployee = (id: number, createEmployee: any): Employee => {
    return createEmployee;
};

// update employee
export const updatedEmployee = (id: number, updatedEmployee: (id: number) => Employee): Employee => {
    return updatedEmployee;
};

// delete employee
export const deleteEmployee = (id: number, deleteEmployee: unknown): Employee => {
    return deleteEmployee;
};

export {employees}
