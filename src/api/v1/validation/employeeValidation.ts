import Joi from "joi";

// Validating fields for Employees//
export const employeeSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  position: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  branchId: Joi.string().required(),
});
