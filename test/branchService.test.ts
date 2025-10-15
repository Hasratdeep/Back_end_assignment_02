import request from "supertest";
import app from "../src/app";
import * as branchController from "../src/api/v1/controllers/employeecontrollers";

jest.mock("../src/api/v1/controllers/branchController", () => ({
  createBranch: jest.fn((req, res) => res.status(201).send()),
  getAllBranches: jest.fn((req, res) => res.status(200).send()),
  getBranchById: jest.fn((req, res) => res.status(200).send()),
  updateBranch: jest.fn((req, res) => res.status(200).send()),
  deleteBranch: jest.fn((req, res) => res.status(200).send()),
}));

describe("Branch API Endpoints", () => {
  it("should call createBranch controller", async () => {
    const res = await request(app).post("/api/v1/branches").send({
        id: 1,
        name: "Vancouver Branch",
        address: "1300 Burrard St, Vancouver, BC, V6Z 2C7",
        phone: "604-456-0022"
    });
    expect(branchController.createBranch).toHaveBeenCalled();
  });

  it("should call getAllBranches controller", async () => {
    const res = await request(app).get("/api/v1/branches");
    expect(branchController.getAllBranches).toHaveBeenCalled();
  });

  it("should call getBranchById controller", async () => {
    const res = await request(app).get("/api/v1/branches/1");
    expect(branchController.getBranchById).toHaveBeenCalled();
  });

  it("should call updateBranch controller", async () => {
    await request(app).put("/api/v1/branches/1").send({ address: "Branch Updated" });
    expect(branchController.updateBranch).toHaveBeenCalled();
  });

  it("should call deleteBranch controller", async () => {
    await request(app).delete("/api/v1/branches/1");
    expect(branchController.deleteBranch).toHaveBeenCalled();
  });

// testing missing parameters//
//missing fields in creating branch//
  it("should return 400 when fields are missing in creating branch", async () => {
    const res = await request(app).post("/api/v1/branches").send({});
    expect(res.status).toBe(400);
  });

//missing fields in updating branch//
  it("should return 400 when fields are missing while updating branch", async () => {
    const res = await request(app).put("/api/v1/branches/1").send({});
    expect(res.status).toBe(400);
  });

//Branch without ID//
  it("should return 400 for a branch without ID", async () => {
    const res = await request(app).get("/api/v1/branches/");
    expect(res.status).toBe(400);
  });

//deleting branch without ID//
  it("should return 400 when deleting branch without ID", async () => {
    const res = await request(app).delete("/api/v1/branches/");
    expect(res.status).toBe(400);
  });
});