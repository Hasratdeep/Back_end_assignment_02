import { Request, Response } from "express";
import * as employeeService from "..services/employeeServices";
import { Employee, employees } from "..data/employees/branches";
import { Request, Response } from "express";
import { ApiResponse } from "../models/ApiResponse";
import { ErrorResponse } from "../models/ErrorResponse";
import { Employee } from "../models/Employee";


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
    const updatedEmployee: Employee = req.body;
    res.status(200).json({ message: "updated employee", data: updatedEmployee });
};

export const deleteEmployee = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    employeeService.deleteEmployee(id, deleteEmployee);
    res.status(200).json({ message: "deleted employee", data: deleteEmployee });
};

export const createEmployee = (req: Request, res: Response) => {
  try {
    const employee: Employee = req.body; // validated already

    const response: ApiResponse<Employee> = {
      success: true,
      message: "Employee created successfully",
      data: employee,
    };

    res.status(201).json(response);
  } catch (err: any) {
    const response: ErrorResponse = {
      success: false,
      message: "Failed to create employee",
      errors: [err.message],
    };

    res.status(500).json(response);
  }
};