import { Request, Response, NextFunction } from "express";
import { validateRequest } from "../src/api/v1/middleware/validateRequest";
import { branchSchema } from "../src/api/v1/validation/branchValidation";

describe("Branch Validation ", () => {
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

  it("should call next() for valid branch data", () => {
    mockReq.body = {
      name: "Downtown Branch",
      address: "123 Main Street",
      phone: "2045551234",
    };
    const middleware = validateRequest(branchSchema);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.json).not.toHaveBeenCalled();
  });

  it("should return 400 for invalid branch data", () => {
    mockReq.body = {
      name: "",
      address: "12",
      phone: "abcd",
    };
    const middleware = validateRequest(branchSchema);
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
