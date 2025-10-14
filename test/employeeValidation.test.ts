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
      name: "Hasrat Kaur",
      position: "Developer",
      email: "hasrat@example.com",
      branchId: "B001",
    };
    const middleware = validateRequest(employeeSchema);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.json).not.toHaveBeenCalled();
  });

  it("should return 400 for invalid employee data", () => {
    mockReq.body = {
      name: "H",
      position: "",
      email: "invalidEmail",
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
