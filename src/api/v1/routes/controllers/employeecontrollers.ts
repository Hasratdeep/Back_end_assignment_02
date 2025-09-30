import { Request, Response } from "express";
import * as employeeService from "../services/employeeService";
import { Employee, employees } from "../../../../data/employees";

export const getAllemployees = (req: Request, res: Response): void => {
    const employee: Employee[] = employeeService.getAllEmployees();
    res.status(200).json({ message: "Get all employees", data: employees });
};

export const getEmployeeById = (req: Request, res: Response): void => {
    const employee: Employee = req.body;
    res.status(201).json({ message: "getEmployeeById", data: getEmployeeById });
};

export const createEmployee = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    const createEmployee: Employee = req.body;
    employeeService.createEmployee(id, employeeService.createEmployee);
    res.status(201).json({ message: "create employee", data: createEmployee });
};

export const updateEmployee = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    const updatedemployee: Employee = req.body;
    employeeService.updateEmployee(id, employeeService.updatedEmployee);
    res.status(200).json({ message: "updated employee", data: updatedemployee });
};

export const deleteEmployee = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    employeeService.deleteEmployee(id, deleteEmployee);
    res.status(200).json({ message: "deleted employee", data: deleteEmployee });
};