import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateRequest = (schema: Joi.ObjectSchema) => 
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      console.error(`[Validation Error] ${req.method} ${req.url}`);
      console.error(`Details:`, error.details.map(d => d.message));

    return res.status(400).json({
        success: false,
        message: "Validation error",
        details: error.details.map(d => d.message),
      });
    }

    next();
  };