import express from "express";
import {
    createBranch,
    getAllBranches,
    getBranchById,
    updateBranch,
    deleteBranch,
} from "..api/v1/employeecontrollers/branchcontrollers";
const router = express.Router();
 
router.post("/", createBranch);
router.get("/", getAllBranches);
router.get("/:id", getBranchById);
router.put("/:id", updateBranch);
router.delete("/:id", deleteBranch);
 
export default router;