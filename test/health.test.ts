import request from "supertest";
import app from "../src/app";

describe("GET /health", () => {
    it("should return 200 OK", async () => {
        const response = await request(app).get("/health");
        expect(response.status).toBe(200);
        expect(response.text).toBe("Server is healthy");
    });
});

/**
 * Represents the response structure for a health check endpoint
 */
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

// Using the interface to type your response
app.get("/api/v1/health", (req, res) => {
    // Create a response object that matches our interface
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});