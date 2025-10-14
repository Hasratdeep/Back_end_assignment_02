import express, { Router } from "express";
import {
    getAllemployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "./controllers/employeecontrollers";
 
const router: Router = express.Router();
 
router.get("/", getAllemployees);
router.get("/", getEmployeeById);
router.post("/:id", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
 
export default router;