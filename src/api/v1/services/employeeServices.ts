import { Employee, employees } from "..src/api/v1/services/employeeServices";
import * as firestoreRepository from "..src/api/v1/repositories/firestoreRepository";

const EMPLOYEES_COLLECTION = "employees";
//Get all employees
export const getAllEmployees = (): Employee[] => {
  return employees;
};
export const getAllEmployees = async (): Promise<Employee[]> => {
    try {
        return await firestoreRepository.getDocuments<Employee>(
            EMPLOYEES_COLLECTION
        );
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to fetch employees: ${errorMessage}`);
    }
}; 

//Get employee by id 
export const getEmployeeById = (id: number): Employee[] => {
  return Employee;
};
export const getEmployeeById = async (id: string): Promise<Employee> => {
    try {
        return await firestoreRepository.getDocumentById<Employee>(
            EMPLOYEES_COLLECTION,
            id
        );
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to fetch employee ${id}: ${errorMessage}`);
    }
};


//create employee
export const createEmployee = (id: number, createEmployee: any): Employee => {
    return createEmployee;
};
export const createEmployee = async (employeeData: Employee): Promise<void> => {
    try {
        await firestoreRepository.createDocument(
            EMPLOYEES_COLLECTION,
            employeeData
        );
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to create employee: ${errorMessage}`);
    }
};

// update employee
export const updatedEmployee = (id: number, updatedEmployee: (id: number) => Employee): Employee => {
    return updatedEmployee;
};
export const updateEmployee = async (employeeData: Employee): Promise<void> => {
    try {
        await firestoreRepository.updateDocument(
            EMPLOYEES_COLLECTION,
            employeeData.id,
            employeeData
        );
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(
            `Failed to update employee ${employeeData.id}: ${errorMessage}`
        );
    }
};

// delete employee
export const deleteEmployee = (id: number, deleteEmployee: unknown): Employee => {
    return deleteEmployee;
};
export const deleteEmployee = async (id: string): Promise<void> => {
    try {
        await firestoreRepository.deleteDocument(
            EMPLOYEES_COLLECTION,
            id
        );
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to delete employee ${id}: ${errorMessage}`);
    }
};

export {employees}