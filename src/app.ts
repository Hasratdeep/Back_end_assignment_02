// Importing morgan , express 
import express, { Express } from "express";
import morgan from "morgan";
import routes from "../api/v1";
const app: Express = express();

// Use morgan for HTTP request logging
app.use(morgan("combined"));
app.use("/api/v1", routes);

export default app;

