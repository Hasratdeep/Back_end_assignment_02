import { Request, Response, NextFunction } from "express";
import { validateRequest } from "../src/api/v1/middleware/validateRequest";
import { employeeSchema } from "../src/api/v1/validation/employeeValidation";

describe("Employee Validation Middleware", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockReq = { body: {} };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  it("should call next() for valid employee data", () => {
    mockReq.body = {
        id: 1,
        name: "Alice Johnson",
        position: "Branch Manager",
        department: "Management",
        email: "alice.johnson@pixell-river.com",
        phone: "604-555-0148",
        branchId: 1
    };
    const middleware = validateRequest(employeeSchema);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.json).not.toHaveBeenCalled();
  });

  it("should return 400 for invalid employee data", () => {
    mockReq.body = {
        id: 1,
        name: "Alice Johnson",
        position: "Branch Manager",
        department: "Management",
        email: "INVALID",
        phone: "604-555-0148",
        branchId: 1
    };
    const middleware = validateRequest(employeeSchema);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        message: "Validation error",
      })
    );
    expect(mockNext).not.toHaveBeenCalled();
  });
});


