import request from "supertest";
import app from "../src/app";
import { response } from "express";

    // To create and employee//
    it("should create  new employee", async () => {
        const newEmployee = {
        name: "Alice Johnson",
        position: "Branch Manager",
        department: "Management",
        email: "alice.johnson@pixell-river.com",
        phone: "604-555-0148",
        branchId: 1,
        };

        const res = await request(app).post("/api/v1/employees").send(newEmployee);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id");
        expect(res.body.name).toBe("Alice Johnson");
        expect(res.status).toHaveBeenCalled();
    });

    it("should fail and return 404 when required fields are missing", async () => {
        const res = await request(app).post("/api/v1/employees").send({
        name: "Alice Johnson",
        });
        expect(res.status).toHaveBeenCalled();
    });

    // To return all employee//
    it("should return all employees", async () => {
        const res = await request(app).get("/api/v1/employees");
        expect(res.status).toHaveBeenCalled();
    });

    //to return an employee by ID//
    it("should return an employee by ID", async () => {
        const res = await request(app).get("/api/v1/employees/1");
        if (res.status = 200) {
        } else {
        expect(res.status).toHaveBeenCalled();
        }
    });

    it("should return 404 when employee ID is missing ", async () => {
        const res = await request(app).get("/api/v1/employees/100");
        expect(response.status).toBe(404);
        expect(res.status).toHaveBeenCalled();
    });

    //To update an employee//
    it("should update an employee", async () => {
        const res = await request(app).put("/api/v1/employees/1").send({
        name: "Alice Johnson",
        position: "IT",
        department: "Management",
        email: "alice.johnson@pixell-river.com",
        phone: "604-555-0148",
        branchId: 1,
        });

        if (res.status = 200) {
        } else {
        expect(response.status).toBe(404);
        expect(res.status).toHaveBeenCalled();
        }
    });

    it("should fail to update employee with missing data", async () => {
        const res = await request(app).put("/api/v1/employees/1").send({});
        expect([404]).toContain(res.status); 
    });

    //To delete an employee//
    it("should delete an employee", async () => {
        const res = await request(app).delete("/api/v1/employees/1");

        if (res.status = 200) {
        } else {
        expect(response.status).toBe(404);
        expect(res.status).toHaveBeenCalled();
        }
    });

    it("should return 404 when deleting a employee", async () => {
        const res = await request(app).delete("/api/v1/employees/999");
        expect(res.status).toBe(404);
    });
