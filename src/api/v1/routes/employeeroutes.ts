import express, { Router } from "express";
import {
    getAllemployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "./controllers/employeecontrollers";;

const router: Router = express.Router();

router.get("/", getAllemployees);
router.post("/", getEmployeeById);
router.put("/:id", createEmployee);
router.delete("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;